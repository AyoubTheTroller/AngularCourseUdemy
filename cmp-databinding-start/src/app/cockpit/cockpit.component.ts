import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() serverBluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerContent = '';

  @ViewChild('serverContent') serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.serverBluePrintCreated.emit({serverName: serverName.value, serverContent: this.serverContent.nativeElement.value});
  }

}
