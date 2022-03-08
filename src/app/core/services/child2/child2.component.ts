import { Component, Inject, OnInit } from '@angular/core';
import { ADDRESS2_CONFIG_TOKEN, ADDRESS_CONFIG_TOKEN } from '../../injection-tokens';
import { Name2Service } from '../child/name.service-2';

@Component({
  selector: 'app-services-child2',
  templateUrl: 'child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  constructor(public ns: Name2Service, @Inject(ADDRESS_CONFIG_TOKEN) public addressConfig: any,
    @Inject(ADDRESS2_CONFIG_TOKEN) public address2Config: any) { }

  ngOnInit() {
    console.log(this.address2Config, 'address 2')
  }
}
