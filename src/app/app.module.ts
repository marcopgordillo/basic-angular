import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './shared/data-storage.service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {CanDeactivateGuardService} from './auth/can-deactivate-guard.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule,
    HttpClientModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
