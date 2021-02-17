import { boolean, button } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';

export default {
  title: 'Form Input',
};

const template = `
	<label
		for="id-1234"
		class="fedex-input_label"
		i18n="@@i18-label-reference">
			Label
	</label>
	<input
		class="fedex-input"
		id="id-1234"
		type="text"
		value=""
		i18n-placeholder="@@i18-placeholder-reference"
		placeholder="Type something..."
		[disabled]="disabled"
		[readonly]="readonly"
	/>
`;

const story = (
  disabled: boolean = false,
  readonly: boolean = false
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  template: `
		${storybookHeader('Form input')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    disabled: boolean('disabled', disabled),
    readonly: boolean('readonly', readonly),
    focus: button('Add keyboard focus', () =>
      document.getElementById('id-1234')?.focus()
    ),
  },
});

export const formInput = () => ({ ...story() });
export const formInputDisabled = () => ({ ...story(true) });
export const formInputReadonly = () => ({ ...story(false, true) });
