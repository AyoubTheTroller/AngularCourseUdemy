import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
    activeEventsCount: number;
    inactiveEventsCount: number;

    addActive(){
        this.activeEventsCount++;
        console.log("Inactive to Active: " + this.activeEventsCount)
    }
    
    addInactive(){
        this.inactiveEventsCount++;
        console.log("Active to Inactive: " + this.inactiveEventsCount)
    }

    getActive(): number{
        return this.activeEventsCount;
    }

    getInactive(): number{
        return this.inactiveEventsCount;
    }

}