import { Component } from '@angular/core';
import { Message } from './common/message.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chit-chat';
  appChat:Message={message:" ", modifiedDate:new Date(), isSentMessage:false};
   
  recievedFromComponent(event:Message){
    this.appChat=event;
    console.log("Message recieved by appComponent "+this.appChat.message)
  
  }


}
