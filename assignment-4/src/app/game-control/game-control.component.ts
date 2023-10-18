import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  valueEmitted: number = 0;
  interval: any;
  sum: number = 0;

  constructor() { }

  ngOnInit() { }

  startGame() {
    this.stopGame();
    this.interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 100) + 1;
      this.valueEmitted = randomValue;
      this.sum = this.sum + randomValue;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  // SECOND VERSION

  @Output() valueEmitter = new EventEmitter<number>;

  startEmittingValues() {
    this.stopEmittingValues();
    this.interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 100) + 1;
      this.valueEmitted = randomValue;
      this.sum = this.sum + randomValue;
      this.valueEmitter.emit(randomValue);
    }, 1000);
  }

  stopEmittingValues() {
    clearInterval(this.interval);
  }
}
