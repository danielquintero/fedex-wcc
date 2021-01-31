import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';

import * as fromIamActions from './iam.actions';
import { IAM } from './iam.models';
import * as fromIam from './iam.reducer';
import * as IamSelectors from './iam.selectors';

@Injectable()
export class IamFacade {
  readonly userProfile$ = this.store.pipe(select(IamSelectors.getSelected));
  readonly loaded$ = this.store.pipe(select(IamSelectors.userProfileLoaded));
  readonly error$ = this.store.pipe(select(IamSelectors.userProfileError));
  readonly isEntityActionProcessing$ = this.actions$
    .pipe(ofType(fromIamActions.signup, fromIamActions.signin), first())
    .pipe(switchMap((_) => this.loaded$.pipe(map((val) => !val))));
  readonly signinError$ = combineLatest([
    this.actions$.pipe(ofType(fromIamActions.signinFailure)),
    this.error$.pipe(
      map((httpError) => httpError?.error?.errors[0]) // TODO: for demonstration purposed, we should handle this in a better way though
    ),
  ]).pipe(
    map((result) => result[1]),
    tap(console.log)
  );
  readonly allIam$ = this.store.pipe(select(IamSelectors.getAllIam));
  readonly selectedIam$ = this.store.pipe(select(IamSelectors.getSelected));

  constructor(
    private readonly store: Store<fromIam.IamPartialState>,
    private readonly actions$: Actions
  ) {
    this.signinError$.subscribe(console.warn);
  }

  signupUser(signupFormPayload: IAM.UserSignUp) {
    this.store.dispatch(fromIamActions.signup(signupFormPayload));
  }

  signinUser(signinFormPayload: IAM.UserSignIn) {
    this.store.dispatch(fromIamActions.signin(signinFormPayload));
  }
}
