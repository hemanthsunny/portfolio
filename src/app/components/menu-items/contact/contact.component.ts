import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../../providers/auth.service';
import { RefreshService } from '../../../providers/refresh.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [ AuthService ]
})
export class ContactComponent implements OnInit {
  saveSuccess = false;
  sendBtnDisabled = false;
  fields = {};
  technologies = ["Angular 2", "Bootstrap", "CSS3", "FeathersJS", "HTML5", "Javascript", "MongoDB", "PHP", "Other"];
  hire = ["Freelance", "Job"];
  constructor(
  	private authService: AuthService,
  	private afdb: AngularFireDatabase
  ) { 
  	// let items = this.afdb.list('/general');
  	// console.log("22",items);
  	
  }

  ngOnInit() {
  	this.fields["tech_name"] = "Angular 2";
  	this.fields["hiring_type"] = "Freelance"
  }

  save(data, collection){
  	this.sendBtnDisabled = true;
  	if(collection == 'general'){
  		delete this.fields["hiring_type"];
  	}else{
  		delete this.fields["tech_name"];
  	}
  	return this.authService.saveTo(collection, data)
  		.then(res => {
  			this.fields = {};
  			this.saveSuccess = true;
  			this.sendBtnDisabled = false;
  			RefreshService.emit("all");
  		})	
  }
}
