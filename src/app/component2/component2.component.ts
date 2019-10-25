import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import {  } from 'protractor';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.sass']
})
export class Component2Component implements OnInit {
  // case3
   @Input('parentData') public parentData1 ;
   @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit('from child to parent');
  }
}
