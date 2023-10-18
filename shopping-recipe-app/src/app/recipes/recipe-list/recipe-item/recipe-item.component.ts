import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem;
  @Output() recipeChosen = new EventEmitter<void>()

  onClick() {
    this.recipeChosen.emit();
  }
}
