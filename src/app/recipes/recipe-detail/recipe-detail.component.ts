import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model'
import { Ingredient } from '../../../models/ingredient.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe;

  constructor(recipe: Recipe) { 
    this.recipe = recipe;
  } 

  ngOnInit(): void {
  }

}
