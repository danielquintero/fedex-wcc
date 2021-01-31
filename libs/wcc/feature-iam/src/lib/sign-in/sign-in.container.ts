import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IamFacade } from '@fedex/shared-iam-data-access';
import { email } from '@fedex/shared-util-form';

@Component({
  selector: 'fedex-sign-in',
  templateUrl: './sign-in.container.html',
  styleUrls: ['./sign-in.container.css'],
})
export class SignInContainer implements OnInit {
  readonly isSigninProcessing$ = this.iamFacade.isEntityActionProcessing$;
  readonly signinError$ = this.iamFacade.signinError$;
  readonly email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(email),
  ]);
  readonly password = new FormControl('', [Validators.required]);
  readonly signinForm: FormGroup = this.formBuilder.group({
    email: this.email,
    password: this.password,
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly iamFacade: IamFacade
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.iamFacade.signinUser(this.signinForm.value);
  }
}
