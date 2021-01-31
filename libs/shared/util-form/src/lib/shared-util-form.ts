import { AbstractControl, FormGroup } from '@ngneat/reactive-forms';
import { ValidationErrors } from '@ngneat/reactive-forms/lib/types';

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

export const upperLowerDigitSymbol = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
export const email =
  "([!#-'*+\\\\/-9=?A-Z^-~-]+(\\.[!#-'*+\\\\/-9=?A-Z^-~-]+)*)@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+";

export const uuid =
  '[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}';

export const token = 'eyJ0[A-Za-z0-9-_.+=]+|ZBT.[A-Za-z0-9-_.+=]*';
