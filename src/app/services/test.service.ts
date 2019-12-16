import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TestService {
  
  constructor() { }

  subject = new Subject<any>();

  setData(name:String){
    // console.log("Name: ", name);
    this.subject.next(name);
  }

  setNewName(): Observable<any>{
    return this.subject.asObservable();
  }
}