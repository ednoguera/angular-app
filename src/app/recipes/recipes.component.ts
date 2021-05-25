import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  @Input() selectedRecipe;
  
  constructor(selectedRecipe: Recipe) {
    this.selectedRecipe = selectedRecipe;
   }

  ngOnInit(): void {
  }

}
