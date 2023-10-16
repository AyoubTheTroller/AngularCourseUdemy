import { Component, OnInit } from "@angular/core";

@Component({
    selector:"app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.css"]
})

export class ServersComponent implements OnInit{
    allowNewServer: boolean = false;
    serverCreationStatus: string = "No server was created!";
    ServerName = 'TestServer';
    serverCreated = false;

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {
        
    }

    onCreateServer(element: any){
        console.log(element);
        this.serverCreated = true;
        this.serverCreationStatus = "Server was created! name is "+this.ServerName;
    }

    onUpdateServerName(event: any){
        console.log(event);
        this.ServerName = (<HTMLInputElement>event.target).value; // or event.target.value
    }
}