import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ElementRef } from '@angular/core';
import { ChildOneComponent } from './child/child1.component';

@Component({
  selector: 'app-core-viewchild',
  templateUrl: 'viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(ChildOneComponent)
  childOneComp?: ChildOneComponent;

  @ViewChild('madeBy')
  madeBy?: ElementRef;

  viewSequence: string[] = [];

  childOneExist: boolean = false;

  constructor() {
    this.viewSequence.push("Constructor. Child One Component status:  " + this.childOneComp);
  }

  ngOnInit() {
    this.viewSequence.push("Ng On Init. Child One Component status:  " + this.childOneComp);
  }

  ngAfterViewInit(): void {
    this.viewSequence.push("Ng After View Init. Child One Component status:  " + this.childOneComp);
  }

  ngAfterViewChecked(): void {
  }

  updateChildOneDate() {
    if (this.childOneComp) {
      this.childOneComp.updateDate();
    }
  }
}
