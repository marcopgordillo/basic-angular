import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeState: Observable<fromRecipe.State>;
  id: number;
  private isAuthenticated: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {

    this.store.select('auth')
      .pipe(
        take(1)
      )
      .subscribe((authState: fromAuth.State) => {
        this.isAuthenticated = authState.authenticated;
      });

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeState = this.store.select('recipes');
      }
    );
  }

  public onAddToShoppingList(): void {
    this.store.select('recipes')
      .pipe(
        take(1)
        )
      .subscribe(
        (recipeState: fromRecipe.State) => {
            this.store.dispatch(new ShoppingListActions.AddIngredients(
              recipeState.recipes[this.id].ingredients
            ));
          }
        );

  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    if (this.isAuthenticated) {
      this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
      this.router.navigate(['/recipes']);
    } else {
      this.router.navigate(['signin']);
    }
  }
}
