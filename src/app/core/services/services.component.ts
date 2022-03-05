import { Component, OnInit } from '@angular/core';
import { Name2Service } from './child/name.service-2';

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {

  constructor(public ns: Name2Service) { }

  ngOnInit() { }
}
