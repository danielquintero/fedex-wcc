import { boolean, button, radios, text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { FormRadioComponent } from './form-radio.component';

export default {
  title: 'Form Radio',
};

const template = `
	<fieldset class="fedex-fieldset as-column">
		<legend class="fedex-fieldset_legend">I am legend</legend>
		<fedex-form-radio
			id="{{ id }}"
			label="{{ label }}"
			labelPosition="{{ labelPosition }}"
			icon="{{ icon }}"
			iconPosition="{{ iconPosition }}"
			name="{{ name }}"
			value="{{ value }}"
			[tag]="tag"
			[checked]="checked"
			[disabled]="disabled"
			[fullWidth]="fullWidth"
		>
		</fedex-form-radio>
		<fedex-form-radio
			id="{{ id }}-2"
			label="{{ label }}"
			labelPosition="{{ labelPosition }}"
			icon="{{ icon }}"
			iconPosition="{{ iconPosition }}"
			name="{{ name }}"
			value="{{ value }}"
			[tag]="tag"
			[checked]="false"
			[disabled]="disabled"
			[fullWidth]="fullWidth"
		>
		</fedex-form-radio>
	</fieldset>
`;

const story = (
  labelPosition: 'left' | 'right',
  icon: string,
  iconPosition: 'left' | 'right',
  checked: boolean = false,
  disabled: boolean = false,
  fullWidth: boolean = false,
  tagColor: 'yellow' | 'red' | 'green' | 'blue' | '' = ''
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: FormRadioComponent,
  template: `
		${storybookHeader('Form - radio')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    label: text('label', 'Radio label'),
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
    name: text('name', 'radio-group-name'),
    value: text('value', 'a value'),
    checked: boolean('checked', checked),
    disabled: boolean('disabled', disabled),
    fullWidth: boolean('full-width', fullWidth),
    tag: radios(
      'display as tag',
      { yellow: 'yellow', red: 'red', green: 'green', blue: 'blue', false: '' },
      tagColor
    ),
    focus: button('Add keyboard focus', () =>
      document.getElementById('fedex-form-radio-id-1234')?.focus()
    ),
  },
});

export const radio = () => ({ ...story('right', '', 'left') });
export const radioIconLeft = () => ({ ...story('right', 'drafts', 'left') });
export const radioIconRight = () => ({ ...story('right', 'drafts', 'right') });
export const radioLabelLeft = () => ({ ...story('left', '', 'left') });
export const radioLabelLeftFullWidth = () => ({
  ...story('left', '', 'left', false, false, true),
});
export const radioLabelLeftIconLeft = () => ({
  ...story('left', 'drafts', 'left'),
});
export const radioLabelLeftIconRight = () => ({
  ...story('left', 'drafts', 'right'),
});
export const radioChecked = () => ({
  ...story('right', '', 'left', true, false, false),
});
export const radioDisabled = () => ({
  ...story('right', '', 'left', false, true, false),
});
export const radioDisabledChecked = () => ({
  ...story('right', '', 'left', true, true, false),
});
export const radioAsTag = () => ({
  ...story('right', '', 'left', false, false, false, 'yellow'),
});
