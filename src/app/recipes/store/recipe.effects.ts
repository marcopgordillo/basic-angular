import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as RecipeActions from './recipe.actions';
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

  constructor(private actions$: Actions,
              private httpClient: HttpClient) {}
}
