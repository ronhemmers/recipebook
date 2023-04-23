import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // Need an emitter to inform the consumer that the ingredients array has changed.
  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  // Making this private, so that the origial array is not passed around.
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  // Return the array object with slice() to make a copy of it that can be passed around,
  // and not give access to the original array data.
  getIngredients() {
    console.log("ShoppingListService::getIngredients()");
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    console.log("ShoppingListService::addIngredient()");

    // Update the ingredients array.
    this.ingredients.push(ingredient);

    // Emit that the array has changed and pass a new copy of the array.
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
