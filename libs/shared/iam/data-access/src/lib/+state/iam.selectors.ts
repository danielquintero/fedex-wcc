import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IAM } from './iam.models';
import {
  IAM_FEATURE_KEY,
  State,
  IamPartialState,
  iamAdapter,
} from './iam.reducer';

// Lookup the 'Iam' feature state managed by NgRx
export const getIamState = createFeatureSelector<IamPartialState, State>(
  IAM_FEATURE_KEY
);

const { selectAll, selectEntities } = iamAdapter.getSelectors();

export const userProfileLoaded = createSelector(
  getIamState,
  (state: State) => state.loaded
);

export const userProfileError = createSelector(
  getIamState,
  (state: State) => state.error
);

export const getAllIam = createSelector(getIamState, (state: State) =>
  selectAll(state)
);

export const getIamEntities = createSelector(getIamState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getIamState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getIamEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
