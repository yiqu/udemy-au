import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { ValueDisplayComponent } from '../value-display/display.component';

@Component({
  selector: 'app-core-user-a',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.scss']
})
export class ProjectionCompAComponent implements OnInit, AfterContentInit {

  @ContentChild(ValueDisplayComponent)
  contentChildA?: ValueDisplayComponent;

  @ContentChildren(ValueDisplayComponent)
  displayChildren?: QueryList<ValueDisplayComponent>;

  @ContentChildren('interest')
  interestChildren?: QueryList<ElementRef>;

  log: string[] = [];

  constructor() { }

  ngOnInit() {
    this.log.push('After ng on init, content child of ValueDisplayComponent is: ' + this.contentChildA + ', value is:'
      + this.contentChildA ?.value);
  }

  ngAfterContentInit(): void {
    this.log.push('After content init, content child of ValueDisplayComponent is: ' + this.contentChildA + ', value is: '
      + this.contentChildA ?.value);
    this.log.push('After content init, ContentChildren for ValueDisplayComponent found: ' + this.displayChildren?.length + ' ');
    if (this.interestChildren) {
      this.interestChildren.forEach((res) => {
        this.log.push('After content init, ContentChildren for #interest found: ' + res.nativeElement.outerHTML + ' ');
      })
    }
  }
}
