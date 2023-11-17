import { Component, Input } from '@angular/core';
import { Message } from '../common/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @Input()
  chat!:Message;

  @Input()
  chatScreenName:string='';

  @Input() chatBubbleColor:string='';

  isSender(): boolean {
    console.log(this.chatBubbleColor)
    return this.chatScreenName === this.chat.sender;
  }

  changeChatBubbleColor(event:string){
    console.log(event);
   this.chatBubbleColor=event;
  }

}
