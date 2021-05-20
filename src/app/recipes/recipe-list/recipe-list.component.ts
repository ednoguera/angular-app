import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  imgPath = 'https://s2.glbimg.com/zMGCL5L4b47nc_WyPeIZBsBqCgE=/0x0:254x198/1000x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/04/03/08_44_17_289_chocolate_cake.jpg';
  recipe: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simple test', 'https://s2.glbimg.com/zMGCL5L4b47nc_WyPeIZBsBqCgE=/0x0:254x198/1000x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/04/03/08_44_17_289_chocolate_cake.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
