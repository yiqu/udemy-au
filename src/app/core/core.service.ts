import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/global/app.reducer';
import * as fromHomeSelectors from './home/store/home.selectors';
import { Title } from './home/store/home.state';
import * as fromHomeActions from './home/store/home.actions';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  homeTitle$: Observable<Title | undefined> = this.store.select(fromHomeSelectors.selectTitle);
  homeTitleWithNewReference$: Observable<Title | undefined> = this.store.select(fromHomeSelectors.selectTitle2);

  loading$: Observable<any> = this.store.select(fromHomeSelectors.selectLoading);
  loadingNewRef$: Observable<any> = this.store.select(fromHomeSelectors.selectLoadingNewRef);

  address$: Observable<any> = this.store.select(fromHomeSelectors.selectAddress);
  addressNewRef$: Observable<any> = this.store.select(fromHomeSelectors.selectAddressNewRef);

  constructor(public store: Store<AppState>) {
  }

  updateLoading() {
    this.store.dispatch(fromHomeActions.updateLoading({ loading: false}));
  }

  updateActualData() {
    this.store.dispatch(fromHomeActions.updateAddress({ addr: {zip: 9999}}));
  }

  updateActualDataName() {
    this.store.dispatch(fromHomeActions.updateName({ name: { display: 'TITLE!', id: 'id',
    user: {
      name: "AA",
      id: 111212
    },
    names: ["kevin", "BEKAH2", "hannah"], address: {zip: 1211}}}));
  }

  setTitle() {
    this.store.dispatch(fromHomeActions.updateTitle({ title: { display: 'TITLE!', id: 'id',
    user: {
      name: "AA",
      id: 111212
    },
    names: ["kevin", "bekah", "hannah"], address: {zip: 1211}} }));
  }

}
