import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation: ViewEncapsulation.None // NEEDED IF WE WANNA APPLY GLOBALY STYLES; IN THIS CASE IF NONE THEN ANGULAR DOES NOT ENCAPLUSATE THE CLASSES SO THEREFORE EVERY css attribute defined in this component will be set globally
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
