import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener, SimpleChanges } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Directive({
  selector: '[appFileSize]'
})
export class FileSizeDirective implements OnInit{
  @Input() maxUploadSize:any;
  @Input() fileSize:any;
  fileSizeInMb: any;
  constructor(private elRef:ElementRef, private renderer:Renderer2, private uploadService:SharedService) { }
  
  ngOnInit(){
    // debugger;
    console.log(this.maxUploadSize*1000000);
    // console.log('fileSize ' +  this.fileSize);
    // console.log(this.fileSize);
  }
 @HostListener('change', ['$event.target.files[0].size']) myClick(size) {
  this.fileSizeInMb = size/1048576;
  if(this.fileSizeInMb<1){
    alert(`Can be uploaded, file size is less than ${this.maxUploadSize} MB`)
  } else
  {
    alert(`Cannot be uploaded, file size exceeds the limit of ${this.maxUploadSize} MB`)
  }
 }

}
