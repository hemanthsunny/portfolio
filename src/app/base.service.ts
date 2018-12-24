import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // tasks: FirebaseListObservable<any[]>
  tasks;
  constructor(
    private http: Http,
    private database: AngularFireDatabase
  ){
    this.tasks = database.list('scheduler').valueChanges();
  }

  getJSON(file){
    let url = "assets/components_data/"+file+".json";

    let headers = new Headers();
    headers.append('Accept', 'application/json');

    return this.http
      .get(url, {headers: headers})
      .toPromise()
      .then(res => {
      	// console.log("RESS", res.json());
		    return res.json();
      })
  }

  updateTasks(){
    return this.tasks;
  }

  getTasks(){
    return this.tasks;
  }
}
