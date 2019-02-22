import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  workflow;
  workflowId;
  smallSidebar = true;

  constructor(router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.workflow = params.workflow ? params.workflow : "dashboard";
      this.workflowId = params.id;
    });
  }

  ngOnInit() {}
}
