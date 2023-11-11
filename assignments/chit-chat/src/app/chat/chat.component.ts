import { Component, Input } from '@angular/core';
import { Message } from '../common/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
@Input('chat')
chat:Message={message:" ", modifiedDate:new Date(), isSentMessage:true};



}
