import {EventEmitter} from "@angular/core";

import {Recipe} from "./recipe.model";

export class RecipeService {

  public recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe',
      'This is a simply test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
