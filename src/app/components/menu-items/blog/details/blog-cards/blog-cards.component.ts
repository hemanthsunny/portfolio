import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BaseService } from "../../../../../base.service";

@Component({
  selector: "app-blog-cards",
  templateUrl: "./blog-cards.component.html"
})
export class BlogCardsComponent implements OnInit {
  blog: any;
  blogs: Array<any> = [];

  @Output() onClick = new EventEmitter();

  constructor(private baseService: BaseService) {
    this.baseService.getJSON("blogs/index").then(res => {
      this.loadBlogs(res.blogs);
    });

  }

  ngOnInit() {}

  loadBlogs(blogs){
    return blogs.map(blog => {
      this.baseService.getJSON("blogs/"+ blog).then(res => {
        this.blogs.push(res);
      });
    })
  }

  displayBlog(blog) {
    this.onClick.next(blog);
  }
}
