import { createAction, props } from "@ngrx/store";

const SELECT_FILES_FOR_UPLOAD: string = '[Upload] selected files for upload';

export const updateTitle = createAction(
  SELECT_FILES_FOR_UPLOAD,
  props<{files: FileList}>()
)

