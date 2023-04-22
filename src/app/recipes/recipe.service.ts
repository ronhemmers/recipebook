import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // Keep track of Recipe objects here in the recipe service instead of the recipe-list component.
  // Making it private so that you can't directly access this array from outside.

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is some simple description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Generic Recipe', 'Another aweseome generic recipe', 'https://www.cookipedia.co.uk/wiki/images/3/39/Shrimp_cakes_-_prawn_balls_recipe.jpg')
  ];

  getRecipes() {
    // Don't pass the object this way, this passes the array as a reference, and we don't
    // want to pass the original data around...
    //return this.recipes;

    // Return the array object with slice() to make a copy of it that can be passed around.
    return this.recipes.slice();
  }

  constructor() { }

}
