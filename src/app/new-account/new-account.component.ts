import { Component, EventEmitter, Output } from '@angular/core';
import { loggingService } from 'src/logging-service';
import { accountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private loggingService: loggingService, private accountService : accountService){
    this.accountService.statusUpdated.subscribe((status : string) => alert('New status ' + status))
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus)
  }
}
