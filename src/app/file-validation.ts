// class to validate files coming in
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FileValidation{

  // extensions array
  allowedExt = ['png', 'jpeg', 'jpg'];
  // file size upto 5MB
  allowedFileSize = 5 * 1024 * 1024;

  // function validates file and returns codes
  // based on the out put to handle validation
  getFileData(fileObj:any){
    let fileName = fileObj['name'];
    let fileSize = fileObj['size'];
    if(this.validateFileExt(fileName)){
      if(this.validateFileSize(fileSize)){
        return 0; // 0 for Valid file
      } else {
        return 1; // 1 for InvalidSize
      }
    } else {
      return 2; // 2 for InvalidType
    }
  }

  // validates extension
  validateFileExt(filename: String) {
    var ext = filename.substring(filename.lastIndexOf('.') + 1);

    // indexOf will return false if obj not found in arr
    let fileTypeCheck = this.allowedExt.includes(ext);
    // return fileTypeCheck;
    if (fileTypeCheck) {
        return true;
    } else {
        return false;
    }
  }

  // validates size
  validateFileSize(filesize: Number) {
    if (filesize < this.allowedFileSize) {
        return true;
    } else {
        return false;
    }
  }
}
