import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	private afdb: AngularFireDatabase
  ) {   	
	}

  saveTo(cname, data){
    data.createdAt = new Date().toLocaleString();
  	let collection = this.afdb.list('/'+cname);
  	return collection.push(data);
  }
}
