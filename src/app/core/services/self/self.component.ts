import { Component, OnInit, Self } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-services-self',
  templateUrl: 'self.component.html',
  providers: [
    UrlService
  ]
})

export class ServicesSelfComponent implements OnInit {


  constructor(@Self() public urlService: UrlService) {
  }

  ngOnInit() {
    console.log(this.urlService)
  }
}
