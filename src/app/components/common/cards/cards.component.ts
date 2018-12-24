import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
	
	@Input()
	title = "CARDS";
	
	@Input()
	icon = "fa fa-tasks";

	@Input()
	cardType = 'medium';

	@Input()
	cardDetails;
	
  constructor() { }

  ngOnInit() {
  	
  }

}
