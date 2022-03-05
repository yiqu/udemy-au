import { Component, OnInit } from '@angular/core';
import { Name2Service } from '../child/name.service-2';

@Component({
  selector: 'app-services-child2',
  templateUrl: 'child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  constructor(public ns: Name2Service) { }

  ngOnInit() { }
}
