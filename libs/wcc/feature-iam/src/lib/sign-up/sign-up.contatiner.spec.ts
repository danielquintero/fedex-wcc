import { readFirst } from '@nrwl/angular/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IAM, IamFacade } from '@fedex/shared-iam-data-access';
import { FormBuilder } from '@ngneat/reactive-forms';
import { of } from 'rxjs';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator/jest';

import { SignUpContainer } from './sign-up.contatiner';

describe('SignUpContatiner', () => {
  let spectator: Spectator<SignUpContainer>;
  let iamFacade: IamFacade;

  const validUserMock: IAM.UserSignUp = {
    firstName: 'jhon',
    lastName: 'doe',
    email: 'jhon.doe@email.com',
    password: '˙Sup3Rs3Cr3tp4sSW0rD',
  };

  function updateForm({
    firstName,
    lastName,
    email,
    password,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    const { signupForm } = spectator.component;
    signupForm.controls['firstName'].setValue(firstName);
    signupForm.controls['lastName'].setValue(lastName);
    signupForm.controls['email'].setValue(email);
    signupForm.controls['password'].setValue(password);
  }

  const iamFacadeMock = {
    signupUser: jest.fn(),
    isEntityActionProcessing$: of(true),
  };

  const createComponent = createComponentFactory({
    component: SignUpContainer,
    imports: [ReactiveFormsModule],
    providers: [FormBuilder, mockProvider(IamFacade, iamFacadeMock)],
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createComponent();
    iamFacade = spectator.inject(IamFacade);
    spectator.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(spectator.component).toBeInstanceOf(SignUpContainer);
  });

  describe('onSubmit', () => {
    it('should call signupUser on iamFacade', () => {
      updateForm(validUserMock);
      spectator.component.onSubmit();
      expect(iamFacade.signupUser).toHaveBeenCalled();
    });

    it('isSignupProcessing$ should be true while processing signup action', async (done) => {
      let result;
      updateForm(validUserMock);
      spectator.component.onSubmit();
      result = await readFirst(spectator.component.isSignupProcessing$);
      expect(result).toBe(true);
      done();
    });
  });
});
