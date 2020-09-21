"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var add_items_component_1 = require("./add-items/add-items.component");
var items_table_component_1 = require("./items-table/items-table.component");
var update_item_details_component_1 = require("./update-item-details/update-item-details.component");
var view_item_component_1 = require("./view-item/view-item.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                add_items_component_1.AddItemsComponent,
                items_table_component_1.ItemsTableComponent,
                update_item_details_component_1.UpdateItemDetailsComponent,
                view_item_component_1.ViewItemComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
