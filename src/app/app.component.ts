import { TestService } from './services/test.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  constructor(private testService: TestService){}

  name:String;

  buttonClick(){
    this.testService.setData(this.name);
    // this.testService.setNewName()
    // .subscribe((data)=>{
    //   console.log("New name is:", data);
    //   this.newName = data;
    // });
  }
}
