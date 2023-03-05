import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]

  constructor() {}

  ngOnInit() {}

  /**
   * Listen to this event coming from shopping-edit component after Add button is pressed.
   * 
   * @param ingredient The new ingredient to add to the list
   */
  onIngredientAdded(ingredient: Ingredient): void {
    console.log("ShoppingListComponent::onIngredientAdded(...)");
    this.ingredients.push(ingredient);
  }
}
