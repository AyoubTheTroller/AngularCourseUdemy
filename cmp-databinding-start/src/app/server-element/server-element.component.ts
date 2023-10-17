import { Component, Input, OnInit, OnChanges, DoCheck, SimpleChanges, OnDestroy, AfterViewInit, AfterContentInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation: ViewEncapsulation.None // NEEDED IF WE WANNA APPLY GLOBALY STYLES; IN THIS CASE IF NONE THEN ANGULAR DOES NOT ENCAPLUSATE THE CLASSES SO THEREFORE EVERY css attribute defined in this component will be set globally
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit, AfterContentInit {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParag', { static: true }) contentParag: ElementRef;
  constructor() {
    console.log("constructor called!");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log("contentParag:" + this.contentParag.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("HeaderContent:" + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("HeaderContent:" + this.header.nativeElement.textContent);
    console.log("contentParag:" + this.contentParag.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

}
