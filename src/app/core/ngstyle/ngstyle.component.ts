import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: 'ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})

export class NgStyleComponent implements OnInit {

  classArray: string[] = [];
  styleObj = {'color':'red', 'font-size.em':'3'};

  constructor() { }

  ngOnInit() {
    this.classArray.push('text-primary', 'border border-success', 'font-weight-bold');
  }


}
