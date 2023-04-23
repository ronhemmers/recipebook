import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // This event emitter could be encapsulated in a method as well...
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  // Keep track of Recipe objects here in the recipe service instead of the recipe-list component.
  // Making it private so that you can't directly access this array from outside.

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is some simple description',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Shrimp', 5),
        new Ingredient('Avocado', 2)
      ]),
    new Recipe(
      'Generic Recipe',
      'Another aweseome generic recipe',
      'https://www.cookipedia.co.uk/wiki/images/3/39/Shrimp_cakes_-_prawn_balls_recipe.jpg',
      [
        new Ingredient('Sauce', 1),
        new Ingredient('Dumpling', 1)
      ]),
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel- just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Lettuce', 1)
      ])
  ];

  // Inject the ShoppingListService into this class so that we when we
  // get a request from the recipe detail component to add ingredients,
  // then we can call the ShoppingListService to add those ingredients.
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // Don't pass the object this way, this passes the array as a reference, and we don't
    // want to pass the original data around...
    //return this.recipes;

    // Return the array object with slice() to make a copy of it that can be passed around.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
