import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fedex-form-radio',
  templateUrl: './form-radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormRadioComponent,
      multi: true,
    },
  ],
  styleUrls: ['./form-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRadioComponent implements ControlValueAccessor {
  @Input() readonly css!: string;
  @Input() readonly checked!: boolean;
  @Input() readonly disabled!: boolean;
  @Input() readonly id!: string;
  @Input() readonly icon!: string;
  @Input() readonly iconPosition: 'left' | 'right' = 'right';
  @Input() readonly fullWidth!: boolean;
  @Input()
  readonly label: string = $localize`:@@uiComponentFormRadioLabel:Radio Label`;
  @Input() readonly labelPosition: 'left' | 'right' = 'right';
  @Input() readonly name!: string;
  @Input() readonly tag!: string;
  @Input() readonly value!: string | boolean;

  private model!: string | boolean | null;

  /* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, functional/immutable-data,
	   @typescript-eslint/no-unused-vars */
  onChange(value: any): void {}

  onTouched(): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this.model = value;
  }

  select() {
    this.model = this.value;
    this.onChange(this.model);
  }
  /* eslint-enable @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any, functional/immutable-data,
	   @typescript-eslint/no-unused-vars */
}
