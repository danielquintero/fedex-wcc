import { boolean, button, radios, text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { FormCheckboxComponent } from './form-checkbox.component';

export default {
  title: 'Form Switch',
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
		${storybookHeader('Form - switch')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    label: text('label', 'Switch label'),
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
    type: radios('type', { checkbox: 'checkbox', switch: 'switch' }, 'switch'),
    checked: boolean('checked', checked),
    disabled: boolean('disabled', disabled),
    fullWidth: boolean('full-width', fullWidth),
    focus: button('Add keyboard focus', () =>
      document.getElementById('fedex-form-checkbox-id-1234')?.focus()
    ),
  },
});

export const switchDefault = () => ({ ...story('right', '', 'left') });
export const switchIconLeft = () => ({ ...story('right', 'drafts', 'left') });
export const switchIconRight = () => ({ ...story('right', 'drafts', 'right') });
export const switchLabelLeft = () => ({ ...story('left', '', 'left') });
export const switchLabelLeftFullWidth = () => ({
  ...story('left', '', 'left', false, false, true),
});
export const switchLabelLeftIconLeft = () => ({
  ...story('left', 'drafts', 'left'),
});
export const switchLabelLeftIconRight = () => ({
  ...story('left', 'drafts', 'right'),
});
export const switchChecked = () => ({
  ...story('right', '', 'left', true, false, false),
});
export const switchDisabled = () => ({
  ...story('right', '', 'left', false, true, false),
});
export const switchDisabledChecked = () => ({
  ...story('right', '', 'left', true, true, false),
});
