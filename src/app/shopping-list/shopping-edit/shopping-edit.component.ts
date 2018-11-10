import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientForm')
  private ingredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    const ingredient: Ingredient = this.ingredientForm.value;
    this.shoppingListService.addIngredient(ingredient);
  }

}
