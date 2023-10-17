import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent {

  isHidden: boolean = false;

  buttonClicksCounter = 0;
  logButtonClicks: string[] = [];

  HideParaghraph() {
    this.isHidden = !this.isHidden;
    this.logButtonClicks.push("Click: " + this.buttonClicksCounter++);
  }

  shouldApplyBlueBgAndWhiteText(log: string): boolean {
    const position = this.logButtonClicks.indexOf(log);
    return position >= 5;
  }
}
