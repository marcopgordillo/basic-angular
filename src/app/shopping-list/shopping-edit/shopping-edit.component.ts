import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm')
  private ingredientForm: NgForm;
  editMode = false;
  editedItemIndex: number;

  private indexSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.indexSubscription = this.shoppingListService.startedEditing.subscribe(
      (index) => {
        this.editMode = true;
        this.editedItemIndex = index;
      }
    );
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }

  public onSubmit(): void {
    const ingredient: Ingredient = this.ingredientForm.value;
    this.shoppingListService.addIngredient(ingredient);
  }

}
