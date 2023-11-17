import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../common/message.interface';
import { OutletContext } from '@angular/router';


@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent {

  @Input()chatMessages: Message[] = [];

  @Input() name: string = '';
  @Output()sendToOtherComponent=new EventEmitter<Message>;

  getSentMessage(event: Message) {
    const currentChat: Message = { message: event.message, modifiedDate: event.modifiedDate, sender: this.name  };

    this.chatMessages.push(currentChat);
    
    this.sendToOtherComponent.emit(currentChat);
    console.log(JSON.stringify(this.chatMessages));
  }

  




}
