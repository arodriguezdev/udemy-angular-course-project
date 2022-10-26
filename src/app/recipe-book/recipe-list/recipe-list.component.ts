import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Big Poggies', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/08/JJ_JOHNSON_HOT_LINKS_H_f.jpg.rend.hgtvcom.616.462.suffix/1623257414850.jpeg'),
    new Recipe('Test Recipe', 'Big Poggies', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/08/JJ_JOHNSON_HOT_LINKS_H_f.jpg.rend.hgtvcom.616.462.suffix/1623257414850.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
