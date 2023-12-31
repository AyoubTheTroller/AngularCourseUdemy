import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() ingridient = new EventEmitter<Ingredient>();

  onSubmit(ingridientName: HTMLInputElement, ingridientAmout: HTMLInputElement){
    this.ingridient.emit(new Ingredient(ingridientName.value,ingridientAmout.valueAsNumber));
  }
}
