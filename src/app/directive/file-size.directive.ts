import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Directive({
  selector: '[appFileSize]'
})
export class FileSizeDirective implements OnInit{
  @Input() maxUploadSize:any;
  @Input() fileSize:any;
  constructor(private elRef:ElementRef, private renderer:Renderer2, private uploadService:SharedService) { }
  
  ngOnInit(){
    // debugger;
    // console.log(this.maxUploadSize*1024);
    // console.log('fileSize ' +  this.fileSize);
    console.log(this.fileSize);
  
  }
  click(event){
    debugger;
    // console.log('click function' ,event[0].size);
    if(event[0].size > this.maxUploadSize*1024){
      alert('Cannot be uploaded');
      return false;
    }else{
      alert('Can be uploaded');
     this.uploadService.handleFileInput(event[0]);
    }
  }



}
