import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ideas",
  templateUrl: "./ideas.component.html"
})
export class IdeasComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.scrollTo({left: 0, top: 0});
  }

  scroll(el) {
    // el.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    //   inline: "nearest"
    // });
    window.scrollTo({left: 0, top: el.offsetTop, behavior: "smooth"})
  }
}
