import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../base.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  displayWorks = false;
  displayCardData = false;
  cardDetails;
  constructor(
  	private baseService: BaseService
  ) {
  	this.baseService.getJSON('skills').then(res => {
  		this.cardDetails = res;
  	})
  }

  ngOnInit() {
    window.scrollTo({left: 0, top: 0});
  }

  scroll(el){
    window.scrollTo({left: 0, top: el.offsetTop, behavior: "smooth"});
  }
}
