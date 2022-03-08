import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ADDRESS2_CONFIG_TOKEN, ADDRESS_CONFIG_TOKEN, GLOBAL_CONFIG_TOKEN, UserConfig, USER_CONFIG_TOKEN } from '../injection-tokens';
import { Name2Service } from './child/name.service-2';
import { UrlService } from './url.service';

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [
    UrlService,
    // {
    //   provide: USER_CONFIG_TOKEN,
    //   useFactory: () => {
    //     return {
    //       name: 'In skip self, but will not use this because skip self',
    //       age: 99
    //     }
    //   }
    // },
  ]
})

export class ServicesComponent implements OnInit {

  constructor(public ns: Name2Service,
    @Inject(USER_CONFIG_TOKEN) public userConfig: UserConfig,
    @Inject(ADDRESS_CONFIG_TOKEN) public addressConfig: any,
    @Inject(ADDRESS2_CONFIG_TOKEN) public address2Config: any,
    @Inject(GLOBAL_CONFIG_TOKEN) public globalToken: any,
    public us: UrlService) {
    }

  ngOnInit() {
    console.log(this.globalToken, ' -> global token')
  }
}



