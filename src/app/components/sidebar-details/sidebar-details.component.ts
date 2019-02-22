import { Component, OnInit, Input, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar-details',
  templateUrl: './sidebar-details.component.html'
})
export class SidebarDetailsComponent implements OnInit {
  height = "500px";

  @Input()
  workflow;
  
  @Input()
  workflowId;

  @Input()
  xsSidebar;
  
  constructor() { 
  }

  ngOnInit() {
  }

  @HostListener('change') ngOnChanges(){
    if(!this.xsSidebar){
      $('#sidebar-details').addClass('hs-body-container');
      $('#sidebar-details').removeClass('hs-body-container-xs');
    }else{
      $('#sidebar-details').addClass('hs-body-container-xs');
      $('#sidebar-details').removeClass('hs-body-container');
    }
  }
}