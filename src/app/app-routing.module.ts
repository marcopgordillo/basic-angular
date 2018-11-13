import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
