"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        // url = "http://127.0.0.1:5000";
        this.url = 'https://services-flask-api.herokuapp.com';
    }
    // gets all items from the server
    CartService.prototype.getItems = function () {
        return this.http.get(this.url + '/items');
    };
    // gets single item from the server
    CartService.prototype.getItem = function (id) {
        var url = this.url + "/item/" + id;
        return this.http.get(url);
    };
    // adds item to the server
    CartService.prototype.addItem = function (item, image) {
        console.log(image[0]);
        console.log(item);
        var name = item.name, description = item.description, price = item.price;
        var formData = new FormData();
        formData.append('description', description);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image[0], image['name']);
        console.table(formData.getAll);
        return this.http.post(this.url + '/add', formData);
    };
    // updates item on the server
    CartService.prototype.updateItem = function (item, image, id) {
        var name = item.name, description = item.description, price = item.price;
        var formData = new FormData();
        formData.append('id', id);
        formData.append('description', description);
        formData.append('name', name);
        formData.append('price', price);
        // image check
        if (image.length == 1) {
            formData.append('image', image[0], image['name']);
        }
        return this.http.put(this.url + '/update', formData);
    };
    // deletes item from the server
    CartService.prototype.deleteItem = function (item) {
        var id = typeof item === 'number' ? item : item.id;
        var url = this.url + "/delete/" + id;
        return this.http["delete"](url, httpOptions);
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
