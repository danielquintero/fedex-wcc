import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IAM } from './iam.models';

export const loadUserProfile = createAction('[Iam] Load User Profile');
export const loadUserProfileSuccess = createAction(
  '[Iam] Load User Profile Success',
  props<{ iam: IAM.UserProfile[] }>()
);
export const loadUserProfileFailure = createAction(
  '[Iam] Load User Profile Failure',
  props<{ error: any }>()
);

export const signup = createAction(
  '[Iam] Sign Up User',
  props<IAM.UserSignUp>()
);
export const signupSuccess = createAction(
  '[Iam] Sign Up User Success',
  props<{ user: IAM.UserProfile }>()
);
export const signupFailure = createAction(
  '[Iam] Sign Up User Failure',
  props<{ error: HttpErrorResponse }>()
);

export const signin = createAction(
  '[Iam] Sign In User',
  props<IAM.UserSignIn>()
);
export const signinSuccess = createAction(
  '[Iam] Sign In User Success',
  props<{ user: IAM.UserProfile }>()
);
export const signinFailure = createAction(
  '[Iam] Sign In User Failure',
  props<{ error: HttpErrorResponse }>()
);
