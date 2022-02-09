import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-component',
  templateUrl: 'comp.component.html',
  styleUrls: ['./comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ComponentComponent implements OnInit {

  ngModelValue: string = 'This is one way ng model value';
  ngModelValue2: string = 'This is 2 way ng model value';
  valueFromTemplateVariable: string = '';

  constructor() { }

  ngOnInit() { }

  onKeyup(val: string) {
    this.valueFromTemplateVariable = val;
  }
}
