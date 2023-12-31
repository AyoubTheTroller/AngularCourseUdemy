import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  switchFeature(feature: string) {
    this.loadedFeature = feature;
  }
  title = 'shopping-recipe-app';
}
