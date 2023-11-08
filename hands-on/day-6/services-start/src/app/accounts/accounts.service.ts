import { Injectable } from "@angular/core";
import { LoggingService } from "src/services/logging.service";

@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

constructor(private loggingSerice:LoggingService){

}

addAccount(name:string,status:string){
    this.accounts.push({name:name,status:status});
}  

updateAccount(id:number,status:string){
    this.accounts[id].status = status;
}
}