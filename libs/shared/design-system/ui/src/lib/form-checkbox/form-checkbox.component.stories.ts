import { boolean, button, radios, text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { FormCheckboxComponent } from './form-checkbox.component';

export default {
  title: 'Form Checkbox',
};

const template = `
	<fedex-form-checkbox
		id="{{ id }}"
		type="{{ type }}"
		label="{{ label }}"
		labelPosition="{{ labelPosition }}"
		icon="{{ icon }}"
		iconPosition="{{ iconPosition }}"
		[checked]="checked"
		[disabled]="disabled"
		[fullWidth]="fullWidth"
	>
	</fedex-form-checkbox>
`;

const story = (
  labelPosition: 'left' | 'right',
  icon: string,
  iconPosition: 'left' | 'right',
  checked: boolean = false,
  disabled: boolean = false,
  fullWidth: boolean = false
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: FormCheckboxComponent,
  template: `
		${storybookHeader('Form - checkbox')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    label: text('label', 'Checkbox label'),
    labelPosition: radios(
      'label-position',
      { left: 'left', right: 'right' },
      labelPosition
    ),
    id: text('id', 'id-1234'),
    icon: text('icon', icon),
    iconPosition: radios(
      'icon-position',
      { left: 'left', right: 'right' },
      iconPosition
    ),
    type: radios(
      'type',
      { checkbox: 'checkbox', switch: 'switch' },
      'checkbox'
    ),
    checked: boolean('checked', checked),
    disabled: boolean('disabled', disabled),
    fullWidth: boolean('full-width', fullWidth),
    focus: button('Add keyboard focus', () =>
      document.getElementById('fedex-form-checkbox-id-1234')?.focus()
    ),
  },
});

export const checkbox = () => ({ ...story('right', '', 'left') });
export const checkboxIconLeft = () => ({ ...story('right', 'drafts', 'left') });
export const checkboxIconRight = () => ({
  ...story('right', 'drafts', 'right'),
});
export const checkboxLabelLeft = () => ({ ...story('left', '', 'left') });
export const checkboxLabelLeftFullWidth = () => ({
  ...story('left', '', 'left', false, false, true),
});
export const checkboxLabelLeftIconLeft = () => ({
  ...story('left', 'drafts', 'left'),
});
export const checkboxLabelLeftIconRight = () => ({
  ...story('left', 'drafts', 'right'),
});
export const checkboxChecked = () => ({
  ...story('right', '', 'left', true, false, false),
});
export const checkboxDisabled = () => ({
  ...story('right', '', 'left', false, true, false),
});
export const checkboxDisabledChecked = () => ({
  ...story('right', '', 'left', true, true, false),
});
