import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { asyncScheduler, combineLatest, Observable, of, timer } from 'rxjs';
import { REQUEST_DELAY } from '@fedex/shared-util-http';
import * as IamActions from './iam.actions';
import { IamApiService } from '../api/iam-api.service';

@Injectable()
export class IamEffects {
  loadUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IamActions.loadUserProfile),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return IamActions.loadUserProfileSuccess({ iam: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return IamActions.loadUserProfileFailure({ error });
        },
      })
    )
  );

  signinUser$ = createEffect(
    () => ({
      requestDelay = REQUEST_DELAY,
      scheduler = asyncScheduler,
    } = {}): Observable<Action> =>
      this.actions$.pipe(
        ofType(IamActions.signin),
        mergeMap(({ email, password }) => {
          return combineLatest([
            timer(requestDelay, scheduler),
            this.iamApiService.signin({ email, password }).pipe(
              switchMap(({ user }) =>
                of(
                  IamActions.signinSuccess({
                    user,
                  })
                )
              ),
              catchError((error) => of(IamActions.signinFailure({ error })))
            ),
          ]).pipe(map((result) => result[1]));
        })
      )
  );

  signupUser$ = createEffect(
    () => ({
      requestDelay = REQUEST_DELAY,
      scheduler = asyncScheduler,
    } = {}): Observable<Action> =>
      this.actions$.pipe(
        ofType(IamActions.signup),
        mergeMap(({ email, firstName, lastName, password }) => {
          return combineLatest([
            timer(requestDelay, scheduler),
            this.iamApiService
              .signup({ email, firstName, lastName, password })
              .pipe(
                switchMap((_) =>
                  of(
                    IamActions.signupSuccess({
                      user: {
                        id: '001',
                        email,
                        firstName,
                        isActive: true,
                        lastName,
                      },
                    })
                  )
                ),
                catchError((error) => of(IamActions.signupFailure({ error })))
              ),
          ]).pipe(map((result) => result[1]));
        })
      )
  );

  userIamActionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(IamActions.signupSuccess, IamActions.signinSuccess),
        tap((_) => this.router.navigate(['/app']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly iamApiService: IamApiService,
    private readonly router: Router
  ) {}
}
