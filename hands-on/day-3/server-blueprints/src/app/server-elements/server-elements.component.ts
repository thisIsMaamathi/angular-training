import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent {

  @Input() element:{ type: string; name: string; content: string; } | undefined;

}
