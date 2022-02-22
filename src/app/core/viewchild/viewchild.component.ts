import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ChildOneComponent } from './child/child1.component';
import { ChildTwoComponent } from './child2/child2.component';

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

  @ViewChildren(ChildTwoComponent)
  childrenTwos?: QueryList<ChildTwoComponent>;

  viewSequence: string[] = [];
  childOneExist: boolean = false;
  childTwos: string[] = ['1','2'];
  child2Sequence: string[] = [];

  constructor() {
    this.viewSequence.push("Constructor. Child One Component status:  " + this.childOneComp);
  }

  ngOnInit() {
    this.viewSequence.push("Ng On Init. Child One Component status:  " + this.childOneComp);
  }

  ngAfterViewInit(): void {
    this.viewSequence.push("Ng After View Init. Child One Component status:  " + this.childOneComp);
    this.child2Sequence.push("View Children, children count: " + this.childrenTwos?.length);

    this.childrenTwos?.changes.subscribe((res) => {
      this.child2Sequence.push("Changes occured for ViewChildren query list");
      console.log(this.childrenTwos, this.child2Sequence);
    })
  }

  ngAfterViewChecked(): void {
  }

  updateChildOneDate() {
    if (this.childOneComp) {
      this.childOneComp.updateDate();
    }
  }

  addAChildTwo() {
    this.childTwos.push("AA");
  }
}
