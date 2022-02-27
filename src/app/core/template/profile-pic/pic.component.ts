import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-pic',
  templateUrl: 'pic.component.html',
  styleUrls: ['./pic.component.scss']
})
export class TemplatePicComponent implements OnInit {

  @Input()
  url?: string;

  constructor() { }

  ngOnInit() { }
}
