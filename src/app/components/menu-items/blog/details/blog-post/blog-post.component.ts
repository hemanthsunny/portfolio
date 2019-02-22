import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BaseService } from "../../../../../base.service";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html"
})
export class BlogPostComponent implements OnInit {
  blog: any;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private baseService: BaseService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.loadBlog(params);
    });
  }

  ngOnInit() {}

  loadBlog(params) {
    this.baseService.getJSON(params.workflow + "/" + params.id).then(blog => {
      this.blog = blog;
    });
  }

  closeBlog() {
    this.router.navigate(["/blog"])
  }
}
