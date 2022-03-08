import { Component, Inject, OnInit } from '@angular/core';
import { ADDRESS2_CONFIG_TOKEN } from '../../injection-tokens';

@Component({
  selector: 'app-services-another',
  templateUrl: 'another.component.html',
  styleUrls: []
})

export class ServicesAnotherComponent implements OnInit {
  constructor(
    @Inject(ADDRESS2_CONFIG_TOKEN) public address2Config: any
  ) { }

  ngOnInit() { }
}
