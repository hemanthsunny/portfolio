import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  workflow;
  smallSidebar = true;
  constructor(
    router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.workflow = params.id ? params.id : 'dashboard';
    })
  }

  ngOnInit() {
  }
}
