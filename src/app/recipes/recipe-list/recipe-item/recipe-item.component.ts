import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  // Outside binding from recipe-list
  @Input() recipe: Recipe;

  // Need to inject the ReceipService into this class.
  constructor(private recipeService: RecipeService) { }

  // Called when you select a recipe item.
  onSelected() {
    console.log("Recipe '" + this.recipe.name + "' was selected, calling RecipeService emitter")
    // Call RecipeService event emitter to transfer data to another component.
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
