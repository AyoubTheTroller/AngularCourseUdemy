import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user-service';
import { CounterService } from '../counter-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  //@Output() userSetToActive = new EventEmitter<number>();
  
  constructor(private userSevice: UserService){}
  
  users: string[] = this.userSevice.getInactiveUsers();

  onSetToActive(id: number) {
    this.userSevice.onSetToActive(id);
  }
}
