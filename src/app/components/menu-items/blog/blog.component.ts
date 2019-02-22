import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html"
})
export class BlogComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  displayBlog(blog) {
    this.router.navigate(["/blog", blog._id]);
  }
}
