import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../auth/auth.reducer';
import { AuthState, AUTH_USER_STATE } from '../auth/auth.state';
import { appMetaDataReducer } from '../meta/meta.reducer';
import { AppMetaDataState, APP_META_DATA_STATE } from '../meta/meta.state';
import { ROUTER_STATE } from '../router/router.state';


export interface AppState {
  [ROUTER_STATE]?: RouterReducerState<any>;
  [AUTH_USER_STATE]: AuthState;
  [APP_META_DATA_STATE]: AppMetaDataState;
}


export const appReducers: ActionReducerMap<AppState> = {
  myRouter: routerReducer,
  authUser: authReducer,
  appMetaData: appMetaDataReducer
}
