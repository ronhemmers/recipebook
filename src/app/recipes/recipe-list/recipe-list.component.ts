import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
