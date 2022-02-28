import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HighLightDirective } from './highlight/highlight.dir';

@Component({
  selector: 'app-directives',
  templateUrl: 'directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesDisplayComponent implements OnInit, AfterViewInit {

  highlight: boolean = false;
  logs: string[] = [];

  @ViewChild('hlDirective')
  highlightDirective?: HighLightDirective;

  @ViewChild('content', {read: HighLightDirective}) //  another way to query for the diretive, when multiple are present
  highlightDirectiveThruDiv?: HighLightDirective;

  @ViewChild('content')
  displayContent?: ElementRef;

  unless: boolean = true;
  unless2: string | undefined | number = 'dadada';

  constructor() {
  }

  ngOnInit() {
    this.logs.push("Init.. highlight directive is: " + this.highlightDirective);
  }

  manuallyHighlight() {
    if (this.highlightDirective) {
      this.highlightDirective.toggleBorder();
    }
  }

  ngAfterViewInit(): void {
    this.logs.push("After view init.. highlight directive is: " + this.highlightDirective);
    console.log(this.highlightDirective)
    console.log(this.displayContent?.nativeElement)
    console.log(this.highlightDirectiveThruDiv)
  }

  toggleUnless() {
    this.unless = !this.unless;
  }

  toggleUnless2() {
    this.unless2 = (this.unless2 === 'dadada' ? 0 : 'dadada');
  }
}
