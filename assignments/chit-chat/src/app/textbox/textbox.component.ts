import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from '../common/message.interface';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
chatPayload:string='';

chat:Message={message:" ", modifiedDate:new Date(), isSentMessage:true};


@Output()
sendChat=new EventEmitter<Message>();



onClick(){
this.chat.message=this.chatPayload;
console.log("onclick works !")
this.sendChat.emit(this.chat);

}

}
