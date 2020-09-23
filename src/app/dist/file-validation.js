"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FileValidation = void 0;
// class to validate files coming in
var core_1 = require("@angular/core");
var FileValidation = /** @class */ (function () {
    function FileValidation() {
        // extensions array
        this.allowedExt = ['png', 'jpeg', 'jpg'];
        // file size upto 5MB
        this.allowedFileSize = 5 * 1024 * 1024;
    }
    // function validates file and returns codes
    // based on the out put to handle validation
    FileValidation.prototype.getFileData = function (fileObj) {
        var fileName = fileObj['name'];
        var fileSize = fileObj['size'];
        if (this.validateFileExt(fileName)) {
            if (this.validateFileSize(fileSize)) {
                return 0; // 0 for Valid file
            }
            else {
                return 1; // 1 for InvalidSize
            }
        }
        else {
            return 2; // 2 for InvalidType
        }
    };
    // validates extension
    FileValidation.prototype.validateFileExt = function (filename) {
        var ext = filename.substring(filename.lastIndexOf('.') + 1);
        // indexOf will return false if obj not found in arr
        var fileTypeCheck = this.allowedExt.includes(ext);
        // return fileTypeCheck;
        if (fileTypeCheck) {
            return true;
        }
        else {
            return false;
        }
    };
    // validates size
    FileValidation.prototype.validateFileSize = function (filesize) {
        if (filesize < this.allowedFileSize) {
            return true;
        }
        else {
            return false;
        }
    };
    FileValidation = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FileValidation);
    return FileValidation;
}());
exports.FileValidation = FileValidation;
