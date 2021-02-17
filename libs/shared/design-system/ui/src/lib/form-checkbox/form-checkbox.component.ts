import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fedex-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxComponent {
  @Input() readonly css!: string;
  @Input() readonly checked!: boolean;
  @Input() readonly disabled!: boolean;
  @Input() readonly id!: string;
  @Input() readonly icon!: string;
  @Input() readonly iconPosition: 'left' | 'right' = 'right';
  @Input() readonly fullWidth!: boolean;
  @Input()
  readonly label: string = $localize`:@@uiComponentFormCheckboxLabel:Checkbox Label`;
  @Input() readonly labelPosition: 'left' | 'right' = 'right';
  @Input() readonly type: 'checkbox' | 'switch' = 'checkbox';
  @Input() readonly value!: string;
}
