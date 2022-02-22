import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-core-viewchild-child2',
  templateUrl: 'child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class ChildTwoComponent implements OnInit {

  @ViewChild('madeBy')
  madeBy?: ElementRef;


  date: number = 0;

  constructor() { }

  ngOnInit() { }

  public updateDate() {
    this.date = new Date().getTime();
  }
}
