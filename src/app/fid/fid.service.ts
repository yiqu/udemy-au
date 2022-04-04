import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/global/app.reducer';
import * as fromUploadActions from './store/upload.actions';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private store: Store<AppState>) {
  }

  attachFile(file: File, fileId: string): void {
    this.store.dispatch(fromUploadActions.attachFile({ file, fileId }));
  }

}
