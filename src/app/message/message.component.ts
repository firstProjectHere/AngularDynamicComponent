import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { TestService } from '../services/test.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewInit {

  @ViewChildren('dc', { read: ViewContainerRef })
  public dc: QueryList<ViewContainerRef>;
  // newName:String;


  constructor(private testService: TestService, private componentFactoryResolver: ComponentFactoryResolver) {

    // this.testService.setNewName()
    // .subscribe((data)=>{
    //   console.log("New name is:", data);
    //   this.newName = data;
    // })

  }

  names:String[] = ["One", "Two", "Three", "Four", "Five", "Six"];

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  loadComponent(index: number){
    console.log("----->>", this.dc);

    let elementArray = this.dc['_results'];

    elementArray.forEach(element => {
      element.clear();
    });

    let elementVCR = this.dc['_results'][index];

    const dcComponent = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    console.log("dcComponent", dcComponent);    

    const dynamicComponent = elementVCR.createComponent(dcComponent);
    console.log("----->>", dynamicComponent);


    //used to send data to child component.
    // dynamicComponent is dynamic component
    // "data" is the input value that we have bind it to the child component
    dynamicComponent.instance.data = "Data from parent component";


    // used to get data from child component via @output decorator
    // "usernameChanged" is emitted value from child component to which we have subscribed it here. 
    dynamicComponent.instance.usernameChanged.subscribe(data=>{
      console.log("data is", data);
      this.names[index] = data.name;
    })

  }

}
