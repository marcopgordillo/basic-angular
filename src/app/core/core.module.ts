import {NgModule} from '@angular/core';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';

import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    BsDropdownModule.forRoot(),
    CollapseModule,
    AuthModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {}
