import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as IamActions from './iam.actions';
import { IAM } from './iam.models';
import { HttpErrorResponse } from '@angular/common/http';

export const IAM_FEATURE_KEY = 'iam';

export interface State extends EntityState<IAM.UserProfile> {
  selectedId?: string;
  loaded: boolean;
  error?: HttpErrorResponse | null;
}

export interface IamPartialState {
  readonly [IAM_FEATURE_KEY]: State;
}

export const iamAdapter: EntityAdapter<IAM.UserProfile> = createEntityAdapter<
  IAM.UserProfile
>();

export const initialState: State = iamAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  selectedId: undefined,
});

const iamReducer = createReducer(
  initialState,
  on(IamActions.loadUserProfile, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(IamActions.loadUserProfileSuccess, (state, { iam }) => {
    return iamAdapter.setAll(iam, { ...state, loaded: true });
  }),
  on(IamActions.loadUserProfileFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(IamActions.signup, (state) => ({ ...state, loaded: false, error: null })),
  on(IamActions.signupSuccess, (state, { user }) =>
    iamAdapter.setOne(user, { ...state, loaded: true, selectedId: user.id })
  ),
  on(IamActions.signupFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(IamActions.signin, (state) => ({ ...state, loaded: false, error: null })),
  on(IamActions.signinSuccess, (state, { user }) =>
    iamAdapter.setOne(user, {
      ...state,
      loaded: true,
      selectedId: user.id,
      error: null,
    })
  ),
  on(IamActions.signinFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return iamReducer(state, action);
}
