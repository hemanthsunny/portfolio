import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
	smallSidebar = true;

	@Input()
	workflow;

	@Output()
	onChange = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  displaySidebar(){
    $('#nav').addClass('toggle-effect');
  	this.smallSidebar = !this.smallSidebar;
  	this.onChange.next(this.smallSidebar);
  }
}
