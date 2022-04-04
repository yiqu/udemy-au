import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { UploadFile } from './upload.state';
import * as fromUploadActions from './upload.actions';


export interface FileUploadEntityState extends EntityState<UploadFile> {
  uploading: boolean;
}

export function selectId(file: UploadFile) {
  return file.id!;
}
export function comparator(a: UploadFile, b: UploadFile) {
  if (a.attachDate && b.attachDate) {
    return a.attachDate < b.attachDate ? 1 : -1;
  }
  return 1;
}
export const adapter = createEntityAdapter<UploadFile>({
  selectId: selectId,
  sortComparer: comparator
})

export const inititalState = adapter.getInitialState({
  uploading: false,
});


export const fileUploadEntityReducer = createReducer(
  inititalState,

  on(fromUploadActions.uploadFileStart, (state, { file, fileId }) => {
    const fileToAdd: UploadFile = {
      attachDate: new Date().getTime(),
      dateModified: file.lastModified,
      file: file,
      fileName: file.name,
      fileSize: file.size,
      id: fileId
    };
    console.log(fileToAdd)
    return adapter.addOne(fileToAdd, {
      ...state,
      loading: true
    });
  }),

)

export function fileUploadEntityReducerFunc(state: FileUploadEntityState | undefined, action: Action) {
  return fileUploadEntityReducer(state, action);
}
