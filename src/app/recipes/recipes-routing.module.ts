import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CanDeactivateGuardService} from '../auth/can-deactivate-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipesComponent} from './recipes.component';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService], canDeactivate: [CanDeactivateGuardService]}
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
