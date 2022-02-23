import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-value-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.scss']
})
export class ValueDisplayComponent implements OnInit {

  @Input()
  value: any;

  constructor() { }

  ngOnInit() { }
}
