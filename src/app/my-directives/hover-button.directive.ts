import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverButton]'
})
export class HoverButtonDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter') onHoverEnter(){
    this.renderer2.addClass(this.elementRef.nativeElement, 'btn-green');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer2.removeClass(this.elementRef.nativeElement, 'btn-green');

  }

  ngOnInit(){
    this.renderer2.addClass(this.elementRef.nativeElement, 'btn-red');

  }
}
