import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  fileToUpload: File = null;
  fileUploadSize:any;
  constructor() { }
  handleFileInput(files: FileList) {
    // this.fileToUpload = files.item(0);
    // this.fileUploadSize = this.fileToUpload.size;
    // if(this.fileUploadSize > 500){
    //   alert('File size exceeds');
      
    // }  else{
    //   alert('Upload successful');
    // }
    alert('Inside service');
  }
}
