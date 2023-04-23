import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  // Notes:
  // 2-way binding, I added this only to enable/disable the Add button,
  // so that you can't add something without a name or an amount < 1.
  ingredientInput: string = '';
  quantityInput: number = 0;

  // Injecting the ShoppigListService into this class.
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  // Will be called when the Add button is pressed.
  onAddItem(): void {
    // Using const, instead of let, because they're not going to change.
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    console.log("ShoppingEditComponent::onAddItem() [" + ingredientName + ":" + ingredientAmount + "]");

    // Call the ShoppingListService to add the new ingredient.
    this.shoppingListService.addIngredient(newIngredient);
  }
}
