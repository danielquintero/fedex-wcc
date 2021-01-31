import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { cold, getTestScheduler, hot } from '@nrwl/angular/testing';

import { IamEffects } from './iam.effects';
import * as IamActions from './iam.actions';
import { IamApiService } from '../api/iam-api.service';
import { IAM } from './iam.models';

describe('IamEffects', () => {
  let actions: Observable<any>;
  let effects: IamEffects;
  let iamApiService: IamApiService;

  const iamApiServiceMock = jest.fn<Partial<IamApiService>, []>(() => ({
    signup: jest.fn(),
    signin: jest.fn(),
  }));

  const createUserProfileEntity = (
    id: string,
    firstName = '',
    lastName = '',
    email = '',
    isActive = true
  ) =>
    ({
      id,
      firstName: firstName || `firstName-${id}`,
      lastName: lastName || `lastName-${id}`,
      email: email || `${firstName}.${lastName}-@email.com`,
      isActive: isActive,
    } as IAM.UserProfile);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), RouterTestingModule],
      providers: [
        IamEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
        { provide: IamApiService, useValue: iamApiServiceMock() },
      ],
    });

    effects = TestBed.inject(IamEffects);
    iamApiService = TestBed.inject(IamApiService);
  });

  describe('signupUser$', () => {
    it('should work', () => {
      jest.spyOn(iamApiService, 'signup').mockReturnValue(cold('a|'));
      const { firstName, lastName, email, isActive } = createUserProfileEntity(
        'USER-AAA'
      );
      const signupPayload: IAM.UserSignUp = {
        firstName,
        lastName,
        email,
        password: 'Sup3RS3cr3TP4ssw0rd',
      };
      actions = hot('-a-|', { a: IamActions.signup(signupPayload) });

      const expected = hot('--a|', {
        a: IamActions.signupSuccess({
          user: { id: '001', firstName, lastName, email, isActive },
        }),
      });

      expect(
        effects.signupUser$({ requestDelay: 10, scheduler: getTestScheduler() })
      ).toBeObservable(expected);
    });
  });

  describe('signinUser$', () => {
    it('should work', () => {
      const user = createUserProfileEntity('USER-AAA');
      const signinPayload: IAM.UserSignIn = {
        email: user.email,
        password: 'Sup3RS3cr3TP4ssw0rd',
      };
      jest
        .spyOn(iamApiService, 'signin')
        .mockReturnValue(cold('a|', { a: { user } }));
      actions = hot('-a-|', { a: IamActions.signin(signinPayload) });

      const expected = hot('--a|', {
        a: IamActions.signinSuccess({
          user: user,
        }),
      });

      expect(
        effects.signinUser$({ requestDelay: 10, scheduler: getTestScheduler() })
      ).toBeObservable(expected);
    });
  });
});
