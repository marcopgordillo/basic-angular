import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducers';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {

  private dbUrl = 'https://udemy-ng-http-b7747.firebaseio.com/';

  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(
      switchMap(
        (action: RecipeActions.FetchRecipes) => {

          const headers = new HttpHeaders({
            'Content-type': 'application/json',
          });

          const httpOptions: object = {
            headers: headers,
            observe: 'body',
            responseType: 'json'
          };

          return this.httpClient.get<Recipe[]>(this.dbUrl + 'recipes.json', httpOptions);
        }),
      map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }

          return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes
          };
        }
        )
      );

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .pipe(
      withLatestFrom(this.store.select('recipes')),
      switchMap(
        ([action, state]) => {

          const headers = new HttpHeaders({
            'Content-type': 'application/json',
          });

          const httpOptions: object = {
            headers: headers,
            observe: 'body',
            responseType: 'json',
            reportProgress: true
          };

          const req = new HttpRequest('PUT', this.dbUrl + 'recipes.json', state.recipes, httpOptions);
          return this.httpClient.request(req);
        }
        )
    );

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromRecipe.FeatureState>) {}
}
