import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../common/message.interface';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
chatPayload:string='';


chat:Message|undefined;
@Input()
position:string="left";




@Output()
sendChat=new EventEmitter<Message>();



onClick(){
  const messageObj={
    message: this.chatPayload,
    modifiedDate: new Date(),
    position: this.position
  }
this.chat=messageObj;
console.log("onclick works !")
this.sendChat.emit(this.chat);

}

}
