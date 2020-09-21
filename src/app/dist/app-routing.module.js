"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_items_component_1 = require("./add-items/add-items.component");
var items_table_component_1 = require("./items-table/items-table.component");
var update_item_details_component_1 = require("./update-item-details/update-item-details.component");
var view_item_component_1 = require("./view-item/view-item.component");
var common_1 = require("@angular/common");
var routes = [
    {
        path: 'add',
        component: add_items_component_1.AddItemsComponent
    },
    {
        path: 'items',
        component: items_table_component_1.ItemsTableComponent
    },
    {
        path: 'edit/:id',
        component: update_item_details_component_1.UpdateItemDetailsComponent
    },
    {
        path: 'item/:id',
        component: view_item_component_1.ViewItemComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes), common_1.CommonModule],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
