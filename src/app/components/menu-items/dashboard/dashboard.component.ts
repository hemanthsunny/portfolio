import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../../providers/auth.service';
import { BaseService } from '../../../base.service';
import { RefreshService } from '../../../providers/refresh.service';
import * as $ from 'jquery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ AuthService, BaseService ]
})
export class DashboardComponent implements OnInit {
  displayWorks = false;
  height = "500px";
  newTask = false;
  hours: Array<any>;
  minutes: Array<any>;
  fields;
  tasks: Array<any>;
  item: Observable<any>;
  resumeLink = "https://firebasestorage.googleapis.com/v0/b/portfolio-fc6f1.appspot.com/o/files%2Fresume.pdf?alt=media&token=fcbcdc17-3dce-478e-96e8-4b2fdd4759d0";

  @ViewChild('modal')
  modal;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private database: AngularFireDatabase
  ) {
      database.object('scheduler').valueChanges().subscribe(res => {
        // this.tasks = res;
        this.structData(res);
        // console.log("SOMETHINGD", res);
      });

      database.object('scheduler/-LHNje1Ih2aHTUS3k4oJ').valueChanges().subscribe(res => {
        // console.log("RESSS", res);

      })
      // this.baseService.getTasks().subscribe(items => {
      //   this.tasks = items;
      // });
      this.loadNewTask();

  }

  ngOnInit() {
    this.tasks = []
  }

  structData(res){
    for(let key in res){
      if(res.hasOwnProperty(key)){
        res[key]["_id"] = key;
        this.tasks.push(res[key]);
      }
    }
    console.log("RES", this.tasks);
  }

  loadNewTask(){
    this.fields = {
      from_hours : "00",
      from_mins : "00",
      to_hours : "01",
      to_mins : "00",
      work_detail: ''
    };
    this.minutes = [];
    this.hours = [];
    for(let i=0; i<24; i++){
      let t = i.toString().length > 1 ? i : "0"+i;
      this.hours.push(t);
    }
    for(let i=0; i<60; i++){
      let t = i.toString().length > 1 ? i : "0"+i;
      this.minutes.push(t);
    }
  }

  update(task, event){
    console.log("TASKKS", task, event);
    task.complete = event.target.checked;

  }

  save(){
    let date = new Date().toLocaleString().toString();
    return this.authService.saveTo("scheduler", this.fields)
      .then((res) => {
        this.loadNewTask();
        this.newTask = false;
        RefreshService.emit("all");
      })
  }
}
