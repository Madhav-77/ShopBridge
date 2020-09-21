import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Inventory } from '../inventory';
import { CartService } from '../cart.service';
import { FileValidation } from '../file-validation';

@Component({
  selector: 'app-item-details',
  templateUrl: './update-item-details.component.html',
  styleUrls: ['./update-item-details.component.css']
})
export class UpdateItemDetailsComponent implements OnInit {

  @Input() item: Inventory;

  public image:any;
  public isProcessing:boolean;
  public imgURL:any;
  public isImageChanged:boolean = false;
  public imagePath;
  public fileValidationErr:any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private fileValidate:FileValidation) {
    }

  // creating a form group and control for reactive forms
  inventoryForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    image: new FormControl()
  });

  ngOnInit(): void {
    this.getItem();
  }

  // gets the requested item from api
  getItem(): void {
		const item_id = + this.route.snapshot.paramMap.get('id');
    this.cartService.getItem(item_id).subscribe((item)=>{
      this.inventoryForm = new FormGroup({
        name: new FormControl(item.name, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(50)]),
        description: new FormControl(item.description, [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{1,200}$'), Validators.maxLength(200)]), // /^[a-zA-Z0-9 ]{1,200}$/
        price: new FormControl(item.price, [Validators.required, Validators.max(99999999)]),
        image: new FormControl('', [Validators.required]),
      });
      this.item = item;
    });
	}

  // validates uploaded file
  getFileValidated(files, $event: Event){
    let fileObj = $event.target['files'][0];
    let getFileStatus = this.fileValidate.getFileData(fileObj);
    console.log(getFileStatus);
    if (getFileStatus == 0) {
      this.preview(files, $event);
      this.fileValidationErr = true;
    } else if (getFileStatus == 1) {
      this.fileValidationErr = "File size too large!";
    } else {
      this.fileValidationErr = "Invalid file type";
    }
  }

  // displays a file before uploading
  preview(files, $event: Event) {
    this.image = $event.target['files'];
    console.log(this.image);
    this.isImageChanged = true;
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  // requests to store the updated data to the db
	save(): void {
    this.item.name = this.inventoryForm.value.name;
    this.item.description = this.inventoryForm.value.description;
    this.item.price = this.inventoryForm.value.price;
    // in case of image is not updated
    if(this.image == null){
      this.image = this.item.image;
    }
    this.cartService.updateItem(this.item, this.image, this.item.id).subscribe(success=> {});
	}
}
