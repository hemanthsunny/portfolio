import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BaseService } from "../../../../../base.service";

@Component({
  selector: "app-blog-cards",
  templateUrl: "./blog-cards.component.html"
})
export class BlogCardsComponent implements OnInit {
  blog: any;
  blogs: Array<any> = [];
  imageNotFound = "https://firebasestorage.googleapis.com/v0/b/portfolio-fc6f1.appspot.com/o/blog_images%2Fimage_not_found.gif?alt=media&token=8c7c8056-5375-422c-98fa-c773dc493faf";
  
  @Output() onClick = new EventEmitter();

  constructor(private baseService: BaseService) {
    this.baseService.getJSON("blog/index").then(res => {
      this.loadBlogs(res.blogs);
    });

  }

  ngOnInit() {}

  loadBlogs(blogs){
    return blogs.map(blog => {
      this.baseService.getJSON("blog/"+ blog).then(res => {
        this.blogs.push(res);
      });
    })
  }

  displayBlog(blog) {
    this.onClick.next(blog);
  }
}
