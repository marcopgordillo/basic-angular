import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input()
  private defaultColor: string = 'transparent';

  @Input('appBetterHighlight')
  private highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor')
  private backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');*/
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  public mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseleave')
  public mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
  }
}
