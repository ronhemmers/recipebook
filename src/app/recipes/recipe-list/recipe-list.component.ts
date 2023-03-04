import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is some simple description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Generic Recipe', 'Another aweseome generic recipe', 'https://www.cookipedia.co.uk/wiki/images/3/39/Shrimp_cakes_-_prawn_balls_recipe.jpg')
  ];

  @Output() recepeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * The all starts in the recipe-item component when the user selects a recipe.
   * The event will reach here since each item int he recipe-list ngFor has a listener
   * to keep track of their own recipe item that was selected.
   * 
   * Here we want to send the information up to the recipes.component.
   * 
   * @param recipe 
   */
  onRecipeSelected(recipe: Recipe) {
    this.recepeWasSelected.emit(recipe);
  }
}
