import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  // Inject the RecipeService into this class.
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
      // Using this service for cross-component communication by using .subscribe()
      // and an es6 (arrow) function.
      this.recipeService.recipeSelected.subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}
