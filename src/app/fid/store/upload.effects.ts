import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { throwError } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import { Action } from '@ngrx/store';
import * as fromUploadActions from './upload.actions';



@Injectable()
export class FileUploadEffects {

  constructor(public actions$: Actions) {
  }

  attachFileForUpload$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.attachFile),
      map((fileAttached) => {
        const file: File = fileAttached.file;
        const fileId: string = fileAttached.fileId;
        return fromUploadActions.uploadFileStart({ fileId: fileId, file: file });
      })
    );
  }, {dispatch: true});


}



export const fileUploadEntityEffect = [
  FileUploadEffects
]
