import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html' ,
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  
  public name="hello";
  public name1="";
  display=true;
  

  constructor() { }

  ngOnInit() {
  }
  onclick(){
    console.log("welcome here");
  }
  show(value)
  {
    console.log(value);
  }
}
