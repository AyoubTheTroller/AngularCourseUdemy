import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Ananas',3),
    new Ingredient('Mango',5)
  ];
  
  addIngriedients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }
}
