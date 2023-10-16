import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`p{
                padding: 10px;
                background-color:antiquewhite;
                font-weight: bold;
                border: 2px solid brown;
            }`]
})
export class ServerComponent{
    serverId: number  = 10;
    serverStatus: string = "offline";
}