import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-desc',
  templateUrl: 'desc.component.html',
  styleUrls: ['./desc.component.scss']
})
export class TemplateDescComponent implements OnInit {

  @Input()
  userDesc?: string;

  constructor() {
  }

  ngOnInit() {
  }
}
