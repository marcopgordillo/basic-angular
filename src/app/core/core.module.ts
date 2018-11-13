import {NgModule} from '@angular/core';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthModule} from '../auth/auth.module';
import {RecipeService} from '../recipes/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {AuthService} from '../auth/auth.service';
import {AuthInterceptor} from "../shared/auth.interceptor";
import {LoggingInterceptor} from "../shared/logging.interceptor";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CollapseModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    AuthModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule {}
