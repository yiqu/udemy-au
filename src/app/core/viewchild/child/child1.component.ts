import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-core-viewchild-child1',
  templateUrl: 'child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildOneComponent implements OnInit {

  @ViewChild('madeBy')
  madeBy?: ElementRef;


  date: number = 0;

  constructor() { }

  ngOnInit() { }

  public updateDate() {
    this.date = new Date().getTime();
  }
}
