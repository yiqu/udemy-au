import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class UnlessDirective implements OnChanges {

  constructor(private templateRef: TemplateRef<any>, private vc: ViewContainerRef) {
    console.log('created')
  }

  @Input('ngxUnless')
  unless?: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.unless, '  value')
    if (this.unless) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.templateRef);
    }
  }


}
