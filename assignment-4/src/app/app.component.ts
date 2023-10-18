import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valueEmitted: number;
  onValueEmitted(value: number) {
    this.valueEmitted = value;
  }
  title = 'assignment-4';
}
