"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var cart_service_1 = require("../cart.service");
var router_1 = require("@angular/router");
var testing_3 = require("@angular/common/http/testing");
var view_item_component_1 = require("./view-item.component");
describe('ViewItemComponent', function () {
    var component;
    var fixture;
    var httpTestingController;
    var service;
    // const fakeActivatedRoute = {
    //   snapshot: { data: {  } }
    // } as ActivatedRoute;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.TestBed.configureTestingModule({
                        declarations: [view_item_component_1.ViewItemComponent],
                        imports: [router_1.Router, testing_3.HttpClientTestingModule],
                        providers: [cart_service_1.CartService, testing_2.RouterTestingModule]
                    }).compileComponents()];
                case 1:
                    _a.sent();
                    service = testing_1.TestBed.call(cart_service_1.CartService);
                    httpTestingController = testing_1.TestBed.call(cart_service_1.CartService);
                    fixture = testing_1.TestBed.createComponent(view_item_component_1.ViewItemComponent);
                    component = fixture.componentInstance;
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_3.HttpClientTestingModule],
            providers: [cart_service_1.CartService, testing_2.RouterTestingModule]
        });
        // Returns a service with the MockBackend so we can test with dummy responses
        service = testing_1.TestBed.call(cart_service_1.CartService);
        // Inject the http service and test controller for each test
        httpTestingController = testing_1.TestBed.call(testing_3.HttpTestingController);
    });
    afterEach(function () {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });
    it('search should return SearchItems', testing_1.fakeAsync(function () {
        var response = {
            resultCount: 1,
            results: [
                {
                    id: 1,
                    name: 'test',
                    description: 'Testing Unit',
                    price: '1234'
                },
            ]
        };
        // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
        service.getItem(1);
        // Expect a call to this URL
        var req = httpTestingController.expectOne('http://127.0.0.1:5000/item/1');
        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        // Respond with this data when called
        req.flush(response);
        // Call tick whic actually processes te response
        testing_1.tick();
        // Run our tests
        expect(service.item.length).toBe(1);
        expect(service.item[0].id).toBe('test');
        expect(service.item[0].name).toBe('Testing Unit');
        expect(service.item[0].description).toBe('1234');
    }));
});
