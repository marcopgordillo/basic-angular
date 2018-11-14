import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm')
  private ingredientForm: NgForm;

  editMode = false;
  editedItem: Ingredient;

  private indexSubscription: Subscription;

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.indexSubscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.ingredientForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          } else {
            this.editMode = false;
          }
        }
      );
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }

  public onSubmit(): void {
    const ingredient: Ingredient = this.ingredientForm.value;

    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: ingredient}));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }

    this.editMode = false;
    this.ingredientForm.reset();
  }

  onClear() {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }
}
