import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loggingService } from 'src/logging-service';
import { accountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService : loggingService , private accountService : accountService) {}
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status)
    this.accountService.statusUpdated.emit(status);
  }

}
