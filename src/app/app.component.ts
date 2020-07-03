import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { FileSizeDirective } from './directive/file-size.directive';
import { SharedService } from './service/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'one-mb-directive';
  public fileSelected:any;
  @ViewChild(FileSizeDirective) dirs;

  constructor(private uploadService:SharedService) { }
  ngOnInit(){
  }
  
  handleFileInput(files: FileList) {
    // debugger;
    this.dirs.click(files);
    // this.fileSelected = files[0];
    // this.uploadService.handleFileInput(files);
    
    
  }
}
