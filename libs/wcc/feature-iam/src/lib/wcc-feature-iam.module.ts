import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInContainer } from './sign-in/sign-in.container';
import { IamContainer } from './iam.container';
import { SignUpContainer } from './sign-up/sign-up.contatiner';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: IamContainer,
        children: [
          {
            path: '',
            redirectTo: 'signin',
            pathMatch: 'full',
          },
          { path: 'signin', component: SignInContainer },
          { path: 'signup', component: SignUpContainer },
          // { path: 'forgot-password', component: ForgotPasswordContainer },
          // { path: 'reset-password', component: ResetPasswordContainer },
        ],
      },
    ]),
  ],
  declarations: [SignInContainer, IamContainer, SignUpContainer],
})
export class wccFeatureSigninModule {}
