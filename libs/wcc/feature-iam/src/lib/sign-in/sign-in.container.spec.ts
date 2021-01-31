import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { IamFacade } from '@fedex/shared-iam-data-access';

import { SignInContainer } from './sign-in.container';

describe('SignInContainer', () => {
  let spectator: Spectator<SignInContainer>;
  let iamFacade: IamFacade;

  const iamFacadeMock = {
    signupUser: jest.fn(),
    isEntityActionProcessing$: of(true),
  };

  const createComponent = createComponentFactory({
    component: SignInContainer,
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
    expect(spectator.component).toBeInstanceOf(SignInContainer);
  });
});
