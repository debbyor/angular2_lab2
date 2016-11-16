import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  //Declare and in itialise a string
  clickMessage: string ="";

  constructor() {}

  //This methos handles the button click
  //Sets the clickMessage property = input
  //No validation - bad idea!
  onClickMe(myMessage: string){
  this.clickMessage = myMessage;
  }

  ngOnInit() {
  }

}
