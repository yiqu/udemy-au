import { createAction, props } from "@ngrx/store";
import { Title } from "./home.state";

const UPDATE_TITLE: string = '[Home] Update title';
const UPDATE_LOADING: string = '[Home] Update loading';
const UPDATE_ADDRESS: string = '[Home] Update address';
const UPDATE_NAME: string = '[Home] Update name';

export const updateTitle = createAction(
  UPDATE_TITLE,
  props<{title?: Title}>()
)

export const updateLoading = createAction(
  UPDATE_LOADING,
  props<{loading: boolean}>()
)

export const updateAddress = createAction(
  UPDATE_ADDRESS,
  props<{addr: any}>()
)

export const updateName = createAction(
  UPDATE_NAME,
  props<{name: any}>()
)
