"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewItemComponent = void 0;
var core_1 = require("@angular/core");
var ViewItemComponent = /** @class */ (function () {
    function ViewItemComponent(route, cartService, navigateViaRouter) {
        this.route = route;
        this.cartService = cartService;
        this.navigateViaRouter = navigateViaRouter;
    }
    ViewItemComponent.prototype.ngOnInit = function () {
        this.base_url = this.cartService.url;
        this.getItem();
    };
    // takes id from url and request
    // to get item with that id to api
    ViewItemComponent.prototype.getItem = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.cartService.getItem(id).subscribe(function (item) { return _this.item = item; });
    };
    // route to edit component
    ViewItemComponent.prototype.navigateToEdit = function (id) {
        this.navigateViaRouter.navigateByUrl('/edit/' + id);
    };
    ViewItemComponent = __decorate([
        core_1.Component({
            selector: 'app-view-item',
            templateUrl: './view-item.component.html',
            styleUrls: ['./view-item.component.css']
        })
    ], ViewItemComponent);
    return ViewItemComponent;
}());
exports.ViewItemComponent = ViewItemComponent;
