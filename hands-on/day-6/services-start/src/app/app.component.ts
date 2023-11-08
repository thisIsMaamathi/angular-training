import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccountsService } from './accounts/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit {
accounts:{name:string,status:string}[]=[];

constructor(private accountsService:AccountsService){}

ngOnInit(): void {
  this.accounts=this.accountsService.accounts;
}
 
}
