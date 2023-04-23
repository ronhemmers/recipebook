import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  // Moved the array of Recipe objects into the recipe service.
  // Now, it will initially be undefined but it will be set below.
  // Note, by (injecting and) using the RecipeService, we're only
  // changing where this class gets the recipe array data from.
  recipes: Recipe[] | undefined;

  // Need to inject the recipes service into here since that's where the data will
  // come from.  And use private to use typescript shortcut to assign the property
  // with the same name.
  constructor(private recipeService: RecipeService) {
    // get a copy of the recipes array from the RecipeService.
    this.recipes = this.recipeService.getRecipes();
  }

}
