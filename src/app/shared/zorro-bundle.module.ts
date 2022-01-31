import { NgModule } from '@angular/core';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  exports: [
    NzBackTopModule,
    NzMessageModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class ZorroModuleBundle {}
