import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Inventory } from '../inventory';
import { CartService } from '../cart.service';
import { FileValidation } from '../file-validation';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-item-details',
  templateUrl: './update-item-details.component.html',
  styleUrls: ['./update-item-details.component.css'],
})
export class UpdateItemDetailsComponent implements OnInit {
  @Input() item: Inventory;

  public image: any;
  public isProcessing: boolean;
  public imgURL: any;
  public isImageChanged: boolean = false;
  public imagePath;
  public fileValidationErrCode: boolean = true;
  public fileValidationErrMsg: String = "";
  public base_url: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private fileValidate: FileValidation,
    private spinner: NgxSpinnerService
  ) {}

  // creating a form group and control for reactive forms
  inventoryForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
  });

  ngOnInit(): void {
    this.spinner.show();
    this.base_url = this.cartService.url;
    this.getItem();
    this.spinner.hide();
  }

  // gets the requested item from api
  getItem(): void {
    const item_id = +this.route.snapshot.paramMap.get('id');
    this.cartService.getItem(item_id).subscribe((item) => {
      // console.log(item);
      if (item) {
        console.log("in if");
        this.inventoryForm = new FormGroup({
          name: new FormControl(item.name, [
            Validators.pattern('[a-zA-Z ]*'),
            Validators.maxLength(50),
          ]),
          description: new FormControl(item.description, [
            Validators.pattern('[a-zA-Z0-9 ]{1,200}$'),
            Validators.maxLength(200),
          ]), // /^[a-zA-Z0-9 ]{1,200}$/
          price: new FormControl(item.price, [
            Validators.max(99999999), Validators.required
          ]),
          image: new FormControl(''),
        });
        this.item = item;
        console.log(this.item);
      } else {
        console.log(false);
        this.item = null;
      }
    });
  }

  delete(item: Inventory): void {
    if(confirm("Are you sure to delete this item?")) {
      // this.spinner.show();
      this.cartService.deleteItem(item).subscribe(success=> {
        this.router.navigate(['/inventory']);
        // this.spinner.hide();
      });
    }
	}

  // validates uploaded file
  getFileValidated(files, $event: Event) {
    let fileObj = $event.target['files'][0];
    let getFileStatus = this.fileValidate.getFileData(fileObj);
    if (getFileStatus == 0) {
      this.preview(files, $event);
      this.fileValidationErrCode = true;
    } else if (getFileStatus == 1) {
      this.fileValidationErrCode = false;
      this.fileValidationErrMsg = 'File size too large!';
    } else {
      this.fileValidationErrCode = false;
      this.fileValidationErrMsg = 'Invalid file type';
    }
  }

  // displays a file before uploading
  preview(files, $event: Event) {
    this.image = $event.target['files'];
    this.isImageChanged = true;
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  // requests to store the updated data to the db
  save(): void {
    this.spinner.show();
    this.item.name = this.inventoryForm.value.name;
    this.item.description = this.inventoryForm.value.description;
    this.item.price = this.inventoryForm.value.price;
    
    this.cartService
      .updateItem(this.item, this.image, this.item.id)
      .subscribe((success) => {
        this.router.navigate(['/inventory']);
    });
    this.spinner.hide();
  }
}
