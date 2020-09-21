"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemsTableComponent = void 0;
var core_1 = require("@angular/core");
var ItemsTableComponent = /** @class */ (function () {
    function ItemsTableComponent(route, cartService) {
        this.route = route;
        this.cartService = cartService;
        this.items = [];
    }
    ItemsTableComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    // fetch all items from service class
    ItemsTableComponent.prototype.getItems = function () {
        var _this = this;
        this.cartService.getItems().subscribe(function (items) {
            _this.items = items;
            console.log("items");
        });
    };
    // passing item to service class for delete request
    ItemsTableComponent.prototype["delete"] = function (item) {
        var _this = this;
        if (confirm("Are you sure to delete this item?")) {
            this.cartService.deleteItem(item).subscribe(function (success) { _this.getItems(); });
        }
    };
    ItemsTableComponent = __decorate([
        core_1.Component({
            selector: 'app-items-table',
            templateUrl: './items-table.component.html',
            styleUrls: ['./items-table.component.css']
        })
    ], ItemsTableComponent);
    return ItemsTableComponent;
}());
exports.ItemsTableComponent = ItemsTableComponent;
