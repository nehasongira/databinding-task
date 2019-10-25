import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.sass']
})
export class Component1Component implements OnInit {
    public child="from parent to child"
  public name1="";
  public msg="";
  public manager="";
  public show(value)
  {
    console.log(value);
    this.manager=value.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
