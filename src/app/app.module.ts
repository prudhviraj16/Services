import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { loggingService } from 'src/logging-service';
import { accountService } from './account.service';
import { AccountComponent } from './account/account.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserService } from 'src/users.service';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [accountService, loggingService, UserService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
