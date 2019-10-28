import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import {  } from 'protractor';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.sass']
})
export class Component2Component implements OnInit {
  // case3
  //  @Input('parentData') public parentData1 ;
   //public msg="";

  @Output() public childEvent1=new EventEmitter();
   constructor() { }

  ngOnInit() {
  }
  fireEvent1(value)
  {
    this.childEvent1.emit(value);
  }

}
