"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddItemsComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var items_table_component_1 = require("../items-table/items-table.component");
var AddItemsComponent = /** @class */ (function () {
    function AddItemsComponent(cart, fileValidate, modalService) {
        this.cart = cart;
        this.fileValidate = fileValidate;
        this.modalService = modalService;
        this.item = { name: '', description: '', price: '' };
        this.image = null;
        this.addItemForm = new forms_1.FormGroup({
            id: new forms_1.FormControl(),
            name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z ]*'), forms_1.Validators.maxLength(50)]),
            description: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9 ]{1,200}$'), forms_1.Validators.maxLength(200)]),
            price: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.max(99999999)]),
            image: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    AddItemsComponent.prototype.ngOnInit = function () { };
    AddItemsComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    AddItemsComponent.prototype.getImageFromView = function ($event) {
        var fileObj = $event.target['files'][0];
        var getFileStatus = this.fileValidate.getFileData(fileObj);
        if (getFileStatus == 0) { // 0 for success
            this.image = $event.target['files'];
            this.fileValidationErr = true;
        }
        else if (getFileStatus == 1) { //1 for size validation
            this.fileValidationErr = "File size too large!";
        }
        else { // 2 for type validation
            this.fileValidationErr = "Invalid file type";
        }
    };
    AddItemsComponent.prototype.save = function () {
        var _this = this;
        this.item = this.addItemForm.value;
        console.log(this.item);
        this.isProcessing = true;
        this.cart.addItem(this.item, this.image).subscribe(function (res) {
            _this.isProcessing = false;
            _this.itemsTable.getItems();
            _this.addItemForm.reset({});
            _this.closeModal();
            // console.log(res);
        }); //this.goBack()
    };
    AddItemsComponent.prototype.closeModal = function () {
        this.modalService.dismissAll();
    };
    __decorate([
        core_1.Input()
    ], AddItemsComponent.prototype, "item");
    __decorate([
        core_1.ViewChild(items_table_component_1.ItemsTableComponent, { static: false })
    ], AddItemsComponent.prototype, "itemsTable");
    AddItemsComponent = __decorate([
        core_1.Component({
            selector: 'app-add-items',
            templateUrl: './add-items.component.html',
            styleUrls: ['./add-items.component.css']
        })
    ], AddItemsComponent);
    return AddItemsComponent;
}());
exports.AddItemsComponent = AddItemsComponent;
