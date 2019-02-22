import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  smallSidebar;

  @Input()
  workflow;

  @Input()
  sidebar;

  constructor(router: Router, private route: ActivatedRoute) {}

  @HostListener("change") ngOnChanges() {    
    $("ul").addClass("toggle-effect");
    if (this.sidebar) {
      $(".hs-slide-menu-list").css({ display: "none" });
      $(".hs-slide-menu-list-xs").css({ display: "block" });
      $(".hs-slide-menu-list-xs").animate({ display: "block" }, "slow");
    } else {
      $(".hs-slide-menu-list").css({ display: "block" });
      $(".hs-slide-menu-list").animate({ display: "block" }, "slow");
      $(".hs-slide-menu-list-xs").css({ display: "none" });
    }
  }

  ngOnInit() {}

  navigateTo() {
    return this.workflow;
  }
}
