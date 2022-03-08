import { Directive, ElementRef, Host, HostBinding, Input, OnChanges, Optional, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { UrlService } from './url.service';

@Directive({
  selector: '[testingHost]'
})
export class TestingHostDirective implements OnChanges {

  @Input()
  @HostBinding('class')
  testingHost: any;

  constructor(@Optional() @Host() public us: UrlService, private renderer: Renderer2, public tr: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.us?.apiUrl)
  }
}
