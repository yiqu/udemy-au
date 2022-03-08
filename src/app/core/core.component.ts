import { Component, OnInit } from '@angular/core';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.scss'],
  providers: [
  ]

})
export class CoreComponent implements OnInit {
  constructor(public us: UrlService) { }

  ngOnInit() {
      this.us.apiUrl = 'UPDATED from core componnet';

  }
}
