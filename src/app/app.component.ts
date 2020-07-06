import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
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


  constructor() { }
  ngOnInit(){
  }
}
