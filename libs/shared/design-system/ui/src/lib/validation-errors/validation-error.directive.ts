import { AfterViewInit, Directive, forwardRef, HostBinding, Inject, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { distinctUntilChanged } from 'rxjs/operators';
import { ValidationErrorsDirective } from './validation-errors.directive';

@UntilDestroy()
@Directive({
	selector: '[zivValidationError]',
})
export class ValidationErrorDirective implements AfterViewInit {
	// eslint-disable-next-line @angular-eslint/no-input-rename
	@Input('zivValidationError') readonly errorName!: string;

	@HostBinding('hidden') hidden = true;

	constructor(
		// eslint-disable-next-line @angular-eslint/no-forward-ref
		@Inject(forwardRef(() => ValidationErrorsDirective))
		private readonly validationErrorsDirective: ValidationErrorsDirective,
	) {}

	ngAfterViewInit() {
		const { control } = this.validationErrorsDirective;

		control.statusChanges.pipe(distinctUntilChanged(), untilDestroyed(this)).subscribe(() => {
			// eslint-disable-next-line
			this.hidden = !control.hasError(this.errorName);
		});
	}
}
