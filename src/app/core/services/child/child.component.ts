import { Component, OnInit } from '@angular/core';
import { Name2Service } from './name.service-2';

@Component({
  selector: 'app-services-child',
  templateUrl: 'child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [Name2Service]
})
export class ServiceChildComponent implements OnInit {
  constructor(public ns: Name2Service) { }

  ngOnInit() { }
}
