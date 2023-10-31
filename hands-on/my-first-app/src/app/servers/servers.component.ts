import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=false;
  serverCreationStatus="No servers created So far";
  serverName=" ";
  serverCreated=false;
  servers=['testServer','server2'];
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server created";
  }

  onUpdateServerName(event:Event){

    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
