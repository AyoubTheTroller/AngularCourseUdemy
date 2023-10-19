import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[appBetterHighlight]' })
export class BetterHighlight implements OnInit{
    constructor(private elementRef: ElementRef ,private renderer: Renderer2) { }
    ngOnInit(): void {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
        this.backgroundColor = 'transparent'
    }

    @Input('default') defaultBGColor: string;
    @Input('hover') hoverBGColor: string;

    @HostBinding('style.BackgroundColor') backgroundColor: string;

    @HostListener('mouseenter') mouseenter(eventData: Event){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
        this.backgroundColor = this.hoverBGColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultBGColor;
    }
} 