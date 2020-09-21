"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateItemDetailsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UpdateItemDetailsComponent = /** @class */ (function () {
    function UpdateItemDetailsComponent(route, router, cartService, fileValidate) {
        this.route = route;
        this.router = router;
        this.cartService = cartService;
        this.fileValidate = fileValidate;
        this.isImageChanged = false;
        // creating a form group and control for reactive forms
        this.inventoryForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            description: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            image: new forms_1.FormControl()
        });
    }
    UpdateItemDetailsComponent.prototype.ngOnInit = function () {
        this.getItem();
    };
    // gets the requested item from api
    UpdateItemDetailsComponent.prototype.getItem = function () {
        var _this = this;
        var item_id = +this.route.snapshot.paramMap.get('id');
        this.cartService.getItem(item_id).subscribe(function (item) {
            // console.log(item.length);
            if (item) {
                _this.inventoryForm = new forms_1.FormGroup({
                    name: new forms_1.FormControl(item.name, [
                        forms_1.Validators.required,
                        forms_1.Validators.pattern('[a-zA-Z ]*'),
                        forms_1.Validators.maxLength(50),
                    ]),
                    description: new forms_1.FormControl(item.description, [
                        forms_1.Validators.required,
                        forms_1.Validators.pattern('[a-zA-Z0-9 ]{1,200}$'),
                        forms_1.Validators.maxLength(200),
                    ]),
                    price: new forms_1.FormControl(item.price, [
                        forms_1.Validators.required,
                        forms_1.Validators.max(99999999),
                    ]),
                    image: new forms_1.FormControl('', [forms_1.Validators.required])
                });
                _this.item = item;
            }
            else {
                _this.item = null;
            }
        });
    };
    UpdateItemDetailsComponent.prototype["delete"] = function (item) {
        var _this = this;
        if (confirm("Are you sure to delete this item?")) {
            this.cartService.deleteItem(item).subscribe(function (success) {
                _this.router.navigate(['/inventory']);
            });
        }
    };
    // validates uploaded file
    UpdateItemDetailsComponent.prototype.getFileValidated = function (files, $event) {
        var fileObj = $event.target['files'][0];
        var getFileStatus = this.fileValidate.getFileData(fileObj);
        console.log(getFileStatus);
        if (getFileStatus == 0) {
            this.preview(files, $event);
            this.fileValidationErr = true;
        }
        else if (getFileStatus == 1) {
            this.fileValidationErr = 'File size too large!';
        }
        else {
            this.fileValidationErr = 'Invalid file type';
        }
    };
    // displays a file before uploading
    UpdateItemDetailsComponent.prototype.preview = function (files, $event) {
        var _this = this;
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
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    // requests to store the updated data to the db
    UpdateItemDetailsComponent.prototype.save = function () {
        this.item.name = this.inventoryForm.value.name;
        this.item.description = this.inventoryForm.value.description;
        this.item.price = this.inventoryForm.value.price;
        // in case of image is not updated
        if (this.image == null) {
            this.image = this.item.image;
        }
        this.cartService
            .updateItem(this.item, this.image, this.item.id)
            .subscribe(function (success) { });
    };
    __decorate([
        core_1.Input()
    ], UpdateItemDetailsComponent.prototype, "item");
    UpdateItemDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-item-details',
            templateUrl: './update-item-details.component.html',
            styleUrls: ['./update-item-details.component.css']
        })
    ], UpdateItemDetailsComponent);
    return UpdateItemDetailsComponent;
}());
exports.UpdateItemDetailsComponent = UpdateItemDetailsComponent;
