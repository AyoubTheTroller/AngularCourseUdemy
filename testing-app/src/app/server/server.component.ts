import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`p{
                padding: 10px;
                font-weight: bold;
                border: 2px solid;
            }
            .online{
                color: white;
                border: 2px solid black
            }`]
})
export class ServerComponent{
    serverId: number  = 10;
    serverStatus: string = "offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}