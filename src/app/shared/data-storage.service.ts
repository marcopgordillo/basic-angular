import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {

  dbUrl = 'https://udemy-ng-http-b7747.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes(): Observable<any> {
    return this.http.put(this.dbUrl + 'recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.dbUrl + 'recipes.json')
      .pipe(map((recipes: Recipe[]) => {
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
