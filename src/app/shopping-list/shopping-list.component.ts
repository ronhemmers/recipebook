import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] | undefined;

  // Injecting the shopping-list.service into this class.
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // Get a copy of the ingredients array fromthe shopping-list service.
    // Note that this is a copy... so when it's updated we need the shopping-list service
    // to inform that it's been updated via an event emitter there.
    this.ingredients = this.shoppingListService.getIngredients();

    // Subscribe to the shopping list service emit that the ingredients array has changed.
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
