import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Observable} from 'rxjs';

@Injectable()
export class DataStorageService {

  dbUrl = 'https://udemy-ng-http-b7747.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes(): Observable<any> {
    return this.http.put(this.dbUrl + 'recipes.json', this.recipeService.getRecipes());
  }
}
