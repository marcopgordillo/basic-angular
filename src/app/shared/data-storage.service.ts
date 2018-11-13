import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {

  dbUrl = 'https://udemy-ng-http-b7747.firebaseio.com/';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes(): Observable<any> {

    const token = this.authService.getToken();

    return this.httpClient.put(this.dbUrl + 'recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.get<Recipe[]>(this.dbUrl + 'recipes.json?auth=' + token)
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
