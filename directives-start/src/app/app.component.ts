import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  evenNumbers = [2,4,6,8,10];
  oddNumbers = [1,3,5,7,9];
  onlyOdd = false;
  valueForNgSwitch: number = 10000;
}
