import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  //Declare and initialise a string
  clickMessage: string = "";

  constructor() { }

  //This button handles the button click
  onClickMe(){
    //Set the message
    this.clickMessage = "You clicked the button";
  }

  ngOnInit() {
  }

}
