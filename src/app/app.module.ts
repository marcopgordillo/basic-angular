import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ActiveUsersComponent} from './active-users/active-users.component';
import {InactiveUsersComponent} from './inactive-users/inactive-users.component';
import {LoggingService} from './services/logging.service';
import {FilterUsersPipe} from './pipes/filter-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    FilterUsersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
