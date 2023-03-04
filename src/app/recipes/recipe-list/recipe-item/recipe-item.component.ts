import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  // Outside binding from recipe-list
  @Input() recipe: Recipe;

  // We want the recipes.component to react when an item was selected
  // We also want outside to be able to listen to this event.
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Called when you select a recipe item.
   */
  onSelected() {
    console.log("Recipe '" + this.recipe.name + "' was selected")
    this.recipeSelected.emit();
  }
}
