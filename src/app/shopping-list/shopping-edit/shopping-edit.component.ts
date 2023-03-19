import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  // Notes:
  // 2-way binding, I added this only to enable/disable the Add button,
  // so that you can't add something without a name or an amount < 1.
  ingredientInput: string = '';
  quantityInput: number = 0;

  /**
   * Will be called when the Add button is pressed.
   */
  onAddItem(): void {
    console.log("ShoppingEditComponent::onAddItem(...)");
    // Emit a custom event, so that the new ingredient can be added into the list in shopping-list component.
    // Using const, instead of let, because they're not going to change.
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
