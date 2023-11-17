import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from './common/message.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  bobMessages: Message[]=[];

  aliseMessages: Message[]=[];

  @Output()
  sendToRespectiveComponent=new EventEmitter<Message[]>

  recievedChat!:Message;

  getFromOtherComponent(event:Message){
  this.recievedChat=event;
  if(this.recievedChat.sender=="bob"){
    this.bobMessages.push(this.recievedChat);
    this.sendToRespectiveComponent.emit(this.bobMessages)
     //console.log("sending to alise   "+JSON.stringify(this.bobMessages))
  }
  else{
    this.aliseMessages.push(this.recievedChat)
    this.sendToRespectiveComponent.emit(this.aliseMessages);
  }

  }
}
