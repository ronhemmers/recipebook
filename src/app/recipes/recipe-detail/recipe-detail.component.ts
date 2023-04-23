import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  // Inject the RecipeService into this class. This will allow
  // us to signal the RecipeService to add ingredients, which will
  // in turn, sign the ShoppingListService to add the ingredients.
  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  // Call the RecipeService to ask it to add ingredients to the ShoppingListService.
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
