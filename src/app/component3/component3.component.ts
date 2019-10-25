import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.sass']
})
export class Component3Component implements OnInit {
  
  @Input('parentData') public parentData1;
  constructor() { }

  ngOnInit() {
  }
  
}
