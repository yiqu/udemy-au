import { Component, Inject, OnInit } from '@angular/core';
import { ADDRESS2_CONFIG_TOKEN } from '../../injection-tokens';
import { Name2Service } from './name.service-2';

@Component({
  selector: 'app-services-child',
  templateUrl: 'child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [Name2Service,
    {
      provide: ADDRESS2_CONFIG_TOKEN,
      useFactory: () => {
        return {
          name: 'Value from component'
        }
      }
    }]
})
export class ServiceChildComponent implements OnInit {
  constructor(public ns: Name2Service,
    @Inject(ADDRESS2_CONFIG_TOKEN) public address2Config: any) { }

  ngOnInit() { }
}
