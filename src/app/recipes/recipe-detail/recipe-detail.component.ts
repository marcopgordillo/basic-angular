import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  private recipe: Recipe;
  private id: number;
  private paramsSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  public onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['edit'], {relativeTo: this.route});
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    } else {
      this.router.navigate(['signin']);
    }
  }

  onDeleteRecipe() {
    if (this.authService.isAuthenticated()) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['/recipes']);
    } else {
      this.router.navigate(['signin']);
    }
  }
}
