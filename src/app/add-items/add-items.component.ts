import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FileValidation } from '../file-validation';
import { Inventory } from '../inventory';
import { CartService } from '../cart.service';
import { ItemsTableComponent } from '../items-table/items-table.component';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
})

export class AddItemsComponent implements OnInit {
  ngOnInit(): void {}

  @Input() item: Inventory = { name: '', description: '', price: '' };

  fileValidationErr:any = null;

  public image: any = null;
  public isProcessing: boolean;

  @ViewChild(ItemsTableComponent, { static: false }) itemsTable: ItemsTableComponent;

  addItemForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{1,200}$'), Validators.maxLength(200)]), // /^[a-zA-Z0-9 ]{1,200}$/
    price: new FormControl('', [Validators.required, Validators.max(99999999)]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(
    private cart: CartService,
    private fileValidate: FileValidation,
    private modalService: NgbModal
  ) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  getImageFromView($event: Event) {
    let fileObj = $event.target['files'][0];
    let getFileStatus = this.fileValidate.getFileData(fileObj);
    if (getFileStatus == 0) { // 0 for success
      this.image = $event.target['files'];
      this.fileValidationErr = true;
    } else if (getFileStatus == 1) { //1 for size validation
      this.fileValidationErr = "File size too large!";
    } else { // 2 for type validation
      this.fileValidationErr = "Invalid file type";
    }
    return this.fileValidationErr;
  }

  save(): void {
    this.item = this.addItemForm.value;
    console.log(this.item);
    this.isProcessing = true;
    this.cart.addItem(this.item, this.image).subscribe((res) => {
      this.isProcessing = false;
      this.itemsTable.getItems();
      this.addItemForm.reset({});
      this.closeModal();
      // console.log(res);
    }); //this.goBack()
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
