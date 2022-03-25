import { createAction, Action, on, createReducer } from "@ngrx/store"
import { HomeState } from "./home.state"
import * as fromHomeActions from './home.actions';

const initialState: HomeState = {
  title: {
    address: {
      zip: 11
    }
  } as any,
  loading: false,
  address: {
    zip: 0
  }
}

export const homeReducer = createReducer(
  initialState,

  on(fromHomeActions.updateTitle, (state, { title }) => {
    return {
      ...state,
      title
    }
  }),

  on(fromHomeActions.updateLoading, (state, { loading }) => {
    return {
      ...state,
      loading: loading
    }
  }),

  on(fromHomeActions.updateAddress, (state, { addr }) => {
    return {
      ...state,
      address: addr
    }
  }),

  on(fromHomeActions.updateName, (state, { name }) => {
    return {
      ...state,
      title: name
    }
  }),
)
