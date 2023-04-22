import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // Moved the array of Recipe objects into the recipe service.
  // Now, it will initially be undefined but it will be set below.
  // Note, by (injecting and) using the RecipeService, we're only
  // changing where this class gets the recipe array data from.
  recipes: Recipe[] | undefined;

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  // Need to inject the recipes service into here since that's where the data will
  // come from.  And use private to use typescript shortcut to assign the property
  // with the same name.
  constructor(private recipeService: RecipeService) {
    // get a copy of the recipes array from the RecipeService.
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit(): void { }

  /**
   * This all starts in the recipe-item component when the user selects a recipe.
   * The event will reach here since each item int he recipe-list ngFor has a listener
   * to keep track of their own recipe item that was selected.
   *
   * Here we want to send the information up to the recipes.component.
   *
   * @param recipe
   */
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
