import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../common/message.interface';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {

  chatPayload:string='';
  chat!:Message;


  @Output()
  sendMessage=new EventEmitter<Message>;

  onClick(){
    const messageObj={
      message: this.chatPayload,
      modifiedDate: new Date(),
      sender:''
     
    
    }
  this.chat=messageObj;
   this.sendMessage.emit(this.chat);
   
  //  console.log(JSON.stringify(this.chat));
  }


}
