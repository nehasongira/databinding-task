import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.sass']
})
export class Component3Component implements OnInit {
  
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit('from child to grandparent');
  }

}
