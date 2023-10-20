import { Injectable } from "@angular/core";
import { CounterService } from "./counter-service";

@Injectable({providedIn: 'root'})
export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private countService: CounterService){

    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.countService.addInactive();
      }
    
    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.countService.addActive();
    }

    getActiveUsers(): string[] {
        return this.activeUsers;
    }

    getInactiveUsers(): string[] {
        return this.inactiveUsers;
    }

}
