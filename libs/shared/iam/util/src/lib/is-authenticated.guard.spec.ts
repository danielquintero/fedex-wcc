import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IamFacade } from '@fedex/shared-iam-data-access';
import { EMPTY } from 'rxjs';

import { IsAuthenticatedGuard } from './is-authenticated.guard';

describe('IsAuthenticatedGuard', () => {
  let guard: IsAuthenticatedGuard;
  const iamFacadeMock = jest.fn<Partial<IamFacade>, []>(() => ({
    userProfile$: EMPTY,
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: IamFacade, useValue: iamFacadeMock() }],
    });
    guard = TestBed.inject(IsAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
