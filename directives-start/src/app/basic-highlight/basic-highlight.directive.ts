import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[appBasicHighLight]' })
export class BasicHighlight implements OnInit {
    constructor(private elementRef: ElementRef) {
    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'purple';
    }
}