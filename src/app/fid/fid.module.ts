import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { SharedBudleModule } from '../shared/shared.module';
import { FideRoutingModule } from './fid-routing.module';
import { FormsInDepthComponent } from './fid.component';
import { FidReactiveComponent } from './reactive/reactive.component';
import { fileUploadEntityEffect } from './store/upload.effects';
import { fileUploadEntityReducerFunc } from './store/upload.reducer';
import { UPLOAD_FILE_STORE_KEY } from './store/upload.state';


@NgModule({
  imports: [
    SharedBudleModule,
    LoadingModule,
    StoreModule.forFeature(UPLOAD_FILE_STORE_KEY, fileUploadEntityReducerFunc),
    EffectsModule.forFeature(fileUploadEntityEffect),
    FideRoutingModule
  ],

  exports: [],

  declarations: [
    FormsInDepthComponent,
    FidReactiveComponent
  ],

  providers: [],
})
export class FormsInDepthModule { }
