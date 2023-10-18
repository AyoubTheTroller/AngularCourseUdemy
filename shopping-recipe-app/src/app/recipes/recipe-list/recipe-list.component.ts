import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://sundaysuppermovement.com/wp-content/uploads/2019/07/picanha-steak-recipe-featured.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://sundaysuppermovement.com/wp-content/uploads/2019/07/picanha-steak-recipe-featured.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://sundaysuppermovement.com/wp-content/uploads/2019/07/picanha-steak-recipe-featured.jpg')
  ];

  @Output() recipeItemEvent = new EventEmitter<Recipe>();

  showRecipeDetails(recipeItem) {
    this.recipeItemEvent.emit(recipeItem);
  }
}
