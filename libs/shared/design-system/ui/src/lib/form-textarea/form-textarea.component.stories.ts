import { boolean, button } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';

export default {
  title: 'Form Textarea',
};

const template = `
	<label
		for="id-1234"
		class="fedex-textarea_label"
		i18n="@@i18-label-reference">
			Label
	</label>
	<textarea
		class="fedex-textarea"
		id="id-1234"
		i18n-placeholder="@@i18-placeholder-reference"
		placeholder="Type something..."
		[disabled]="disabled"
		[readonly]="readonly"></textarea>
`;

const story = (
  disabled: boolean = false,
  readonly: boolean = false
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  template: `
		${storybookHeader('Form textarea')}
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

export const formTextarea = () => ({ ...story() });
export const formTextareaDisabled = () => ({ ...story(true) });
export const formTextareaReadonly = () => ({ ...story(false, true) });
