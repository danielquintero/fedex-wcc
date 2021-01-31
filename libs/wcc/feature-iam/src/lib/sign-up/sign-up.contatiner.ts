import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgValidatorsErrors,
  ValidatorFn,
} from '@ngneat/reactive-forms';
import { IamFacade } from '@fedex/shared-iam-data-access';
import {
  email,
  MustNotMatch,
  ValidatePasswordStrength,
} from '@fedex/shared-util-form';
import { Validators } from '@angular/forms';
import { IAM } from '@fedex/shared-iam-data-access';

@Component({
  selector: 'fedex-sign-up',
  templateUrl: './sign-up.contatiner.html',
  styleUrls: ['./sign-up.contatiner.css'],
})
export class SignUpContainer {
  readonly isSignupProcessing$ = this.iamFacade.isEntityActionProcessing$;
  readonly firstName = new FormControl<string, NgValidatorsErrors>('', [
    Validators.required,
  ]);
  readonly lastName = new FormControl<string, NgValidatorsErrors>('', [
    Validators.required,
  ]);
  readonly email = new FormControl<string, NgValidatorsErrors>('', [
    Validators.required,
    Validators.email,
    Validators.pattern(email),
  ]);
  readonly password = new FormControl<string, NgValidatorsErrors>('', [
    Validators.required,
    Validators.minLength(8),
    ValidatePasswordStrength as ValidatorFn,
  ]);
  readonly rememberMe = new FormControl<boolean>(false);
  readonly signupForm: FormGroup<IAM.UserSignUp> = this.formBuilder.group(
    {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    },
    {
      validator: MustNotMatch(
        'password',
        'firstName',
        'lastName'
      ) as ValidatorFn,
    }
  );

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly iamFacade: IamFacade
  ) {}

  onSubmit() {
    this.iamFacade.signupUser(this.signupForm.value);
  }
}
