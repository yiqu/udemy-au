import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBudleModule } from './shared/shared.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { FooterModule } from './footer/footer.module';
import { NotFoundComponentModule } from './404/404.module';
import { AccountBookFill, AlertFill, AppstoreOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons: IconDefinition[] = [ AccountBookFill, AppstoreOutline, AlertFill ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedBudleModule,
    SideNavModule,
    TopNavModule,
    FooterModule,
    NotFoundComponentModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
