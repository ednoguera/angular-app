import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor (recipe: Recipe) {
    this.recipe = recipe;
  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
