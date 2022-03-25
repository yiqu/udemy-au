import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState, Title } from "./home.state";

export const homeFeatureState = createFeatureSelector<HomeState>("home");


export const selectTitle = createSelector(
  homeFeatureState,
  (allEntities) => {
    return allEntities.title;
  }
);

export const selectLoading = createSelector(
  homeFeatureState,
  (allEntities) => {
    return allEntities.loading;
  }
);
// works because it is a primitve
export const selectLoadingNewRef = createSelector(
  homeFeatureState,
  (allEntities) => {
    return JSON.parse(JSON.stringify(allEntities.loading));
  }
);

export const selectAddress = createSelector(
  homeFeatureState,
  (allEntities) => {
    return allEntities.address;
  }
);
// works because it is a primitve
export const selectAddressNewRef = createSelector(
  homeFeatureState,
  (allEntities) => {
    return JSON.parse(JSON.stringify(allEntities.address));
  }
);

// will always reemit because of the JSON stringfy
export const selectTitle2 = createSelector(
  homeFeatureState,
  (allEntities) => {
    if (allEntities.title) {
      const result: Title = JSON.parse(JSON.stringify(allEntities.title));
     // const result = allEntities.title;
      return result;
    }
    return undefined;
  }
);

