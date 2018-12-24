import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-blog-body",
  templateUrl: "./blog-body.component.html",
  inputs: ["blog"]
})
export class BlogBodyComponent implements OnInit {
  blog: any;

  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  closeBlog(){
    this.onClick.emit();
  }
}
