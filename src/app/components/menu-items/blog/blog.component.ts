import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../base.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  displayWorks = false;
  blog: any;
  pageId = "/blog";

  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit() {
    console.log("adding log for testing purpose");
    
  }

  displayBlog(blog){
    this.blog = blog;
  }
}
