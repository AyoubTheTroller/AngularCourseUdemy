import { Component } from "@angular/core";

@Component({
    selector: "warning-alert",
    templateUrl: "./warning-alert.component.html",
    styles: [`
                p{
                    font-weight: bold;
                    padding: 20px;
                    background-color: rosybrown;
                    border: 1px solid red;
                    }`
            ]
})
export class WarninAlertComponent{

}