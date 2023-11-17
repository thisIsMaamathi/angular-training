import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatComponent } from './chat/chat.component';
import { TextboxComponent } from './textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { ColorButtonComponent } from './color-button/color-button.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent,
    ChatComponent,
    TextboxComponent,
    ColorButtonComponent,

 
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
