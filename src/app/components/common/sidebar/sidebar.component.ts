import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  smallSidebar;

  @Input()
  workflow;

  @Input()
  sidebar;

  constructor(
    router: Router,
    private route: ActivatedRoute
  ) {
  }

  @HostListener('change') ngOnChanges(){
    $('ul').addClass('toggle-effect');
  }

  ngOnInit() {
  }

  navigateTo(){
    return this.workflow;
  }
}
