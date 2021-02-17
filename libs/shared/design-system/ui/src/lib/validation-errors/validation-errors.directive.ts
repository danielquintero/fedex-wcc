import { AfterViewInit, Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Directive({
	selector: '[zivValidationErrors]',
})
export class ValidationErrorsDirective implements AfterViewInit {
	@Input('zivValidationErrors') readonly control!: FormControl;

	@HostBinding('hidden') hidden = true;

	constructor(private readonly el: ElementRef<HTMLElement>) {}

	ngAfterViewInit() {
		const { nativeElement } = this.el;
		if (nativeElement.hasAttribute('aria-live') === false) {
			nativeElement.setAttribute('aria-live', 'polite');
		}

		this.control.statusChanges.pipe(distinctUntilChanged(), untilDestroyed(this)).subscribe(() => {
			// eslint-disable-next-line
			this.hidden = this.control.valid || (this.control.dirty && this.control.invalid);
		});
	}
}
