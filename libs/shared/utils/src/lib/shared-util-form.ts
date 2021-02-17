import { AbstractControl, FormGroup } from '@ngneat/reactive-forms';
import { ValidationErrors } from '@ngneat/reactive-forms/lib/types';
import { upperLowerDigitSymbol } from './regex-patterns';

// custom validator to check that a field does not include other control's values
export const MustNotMatch = (
  controlName: string,
  matchingControlName1: string,
  matchingControlName2: string
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const control1 = formGroup.controls[controlName];
    const matchingControl1 = formGroup.controls[matchingControlName1];
    const matchingControl2 = formGroup.controls[matchingControlName2];

    if (!control || !matchingControl1 || !matchingControl2) return null;

    const { value } = control1;
    if (
      ((value as string).includes(matchingControl1.value) &&
        matchingControl1.value !== '') ||
      ((value as string).includes(matchingControl2.value) &&
        matchingControl2.value !== '')
    ) {
      return { mustNotMatch: true };
    } else {
      return null;
    }
  };
};

export const ValidatePasswordStrength = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control || !control.value) return null;
  if (!upperLowerDigitSymbol.test(control.value as string)) {
    return { weakPassword: true };
  }
  return null;
};
