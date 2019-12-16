import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor() { }

  username:String;
  @Output() usernameChanged = new EventEmitter();

  @Input('data') data: String;

  ngOnInit() {
  }

  submitUserInfo(){
    console.log("User new name is", this.username);
    this.usernameChanged.emit({name : this.username});
  }

}
