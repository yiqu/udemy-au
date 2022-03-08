import { Component, Inject, OnInit, SkipSelf } from '@angular/core';
import { USER_CONFIG_TOKEN, UserConfig } from '../../injection-tokens';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-services-skip-self',
  templateUrl: 'skip-self.component.html',
  providers: [
    UrlService,
    {
      provide: USER_CONFIG_TOKEN,
      useFactory: () => {
        return {
          name: 'In skip self, but will not use this because skip self',
          age: 99
        }
      }
    },
  ]
})

export class SkipSelfComponent implements OnInit {

  constructor(
    @SkipSelf() public us: UrlService,
    @SkipSelf() @Inject(USER_CONFIG_TOKEN) public userConfig: UserConfig
  ) {
  }

  ngOnInit() { }
}
