import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  dbUrl = 'https://udemy-ng-http-b7747.firebaseio.com/';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {}

  storeRecipes(): Observable<any> {

    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    const httpOptions: object = {
      headers: headers,
      observe: 'body',
      responseType: 'json',
      reportProgress: true
    };

    const recipes: Recipe[] = this.recipeService.getRecipes();

    const req = new HttpRequest('PUT', this.dbUrl + 'recipes.json', recipes, httpOptions);
    return this.httpClient.request(req);

    // return this.httpClient.put(this.dbUrl + 'recipes.json', recipes, httpOptions);
  }

  getRecipes() {

    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    const httpOptions: object = {
      headers: headers,
      observe: 'body',
      responseType: 'json'
    };

    return this.httpClient.get<Recipe[]>(this.dbUrl + 'recipes.json', httpOptions)
      .pipe(map((recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }

        return recipes;
      }))
      .subscribe(
        (recipes) => this.recipeService.setRecipes(recipes)
      );
  }
}
