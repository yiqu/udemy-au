import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-services-child3',
  templateUrl: 'child3.component.html',
  providers: [
    UrlService
  ]
})

export class Child3Component implements OnInit {
  constructor(public us: UrlService) { }

  ngOnInit() {
    this.us.apiUrl = 'Child 3 API URL'
  }
}
