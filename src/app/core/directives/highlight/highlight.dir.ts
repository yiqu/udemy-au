import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highlight]',
  exportAs: 'hl'
})
export class HighLightDirective implements OnChanges{

  // @Input()
  // highlight: boolean = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.highlightOn = true;
    this.renderer.addClass(this.el.nativeElement, 'highlight');
    this.renderer.addClass(this.el.nativeElement, 'entered');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.highlightOn = false;
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

  highlightOn: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public toggleBorder() {
    if (this.highlightOn) {
      this.renderer.removeClass(this.el.nativeElement, 'highlight');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'highlight');
    }
    this.highlightOn = !this.highlightOn;
  }



}
