import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user-service';
import { CounterService } from '../counter-service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  //@Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userSevice: UserService, private countService: CounterService){}
  
  users: string[] = this.userSevice.getActiveUsers();

  onSetToInactive(id: number) {
    this.userSevice.onSetToInactive(id);
  }

}
