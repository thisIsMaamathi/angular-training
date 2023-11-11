import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../common/message.interface';
import { OutletContext } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent {
 chatMessages:Message[]=[];
//  recievedChats:Message[]=[];
 
 @Output()
  sendToOtherComponent=new EventEmitter<Message>;

 @Input()
 recievedChat:Message={message:" ", modifiedDate:new Date(), isSentMessage:false};

 //display, own chat that was sent
 displaySendersChat(event:Message){
  const currentChat: Message=
  {message:event.message, modifiedDate:new Date(), isSentMessage:true};
  // const recievedMsg:Message=
  // {message:this.recievedChat.message, modifiedDate:new Date(), isSentMessage:false};

  this.chatMessages.push(currentChat);
  
  this.sendToOtherComponent.emit(currentChat);
  this.chatMessages.push(this.recievedChat);
 
  // console.log("recieved chat  :  "+currentChat);
  console.log("Messge : "+currentChat.message);
  console.log("chatMessages "+JSON.stringify(this.chatMessages));
  console.log("Message recievd from appcomponent "+ JSON.stringify(this.recievedChat));
 }

 //display recieved chat


}
