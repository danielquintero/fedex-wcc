import { boolean } from '@storybook/addon-knobs';
import { dummyTextMock } from '@fedex/testing/mocks';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { RichTextEditorComponent } from './rich-text-editor.component';

export default {
  title: 'Rich Text Editor',
};

const templates = {
  default: `
		<fedex-rich-text-editor
			content="${dummyTextMock.lorum.paragraph}"
			(contentChanged)="output = $event">
		</fedex-rich-text-editor>
	`,
  toggle: `
		<fedex-button
			label="Toggle editor"
			type="button"
			action="secondary"
			icon="mode_edit"
			[iconOnly]="false"
			css="mb-4"
			(click)="visible = !visible; content = 'Edit the text to see the changes';">
		</fedex-button>
		<p *ngIf="visible === false" class="mb-8">${dummyTextMock.lorum.paragraph}</p>
		<fedex-rich-text-editor
			*ngIf="visible === true"
			content="${dummyTextMock.lorum.paragraph}"
			(contentChanged)="output = $event">
			>
		</fedex-rich-text-editor>
	`,
};

const story = (
  template: 'default' | 'toggle' = 'default',
  visible: boolean = true
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: RichTextEditorComponent,
  template: `
		${storybookHeader('Rich Text Editor')}
		<p class="mb-6">
			Uses <a class="fedex-link" href="https://quilljs.com" target="_blank">Quill</a>
		</p>
		<fedex-notification type="alert" status="info" css="my-4">
			<fedex-icon type="info"></fedex-icon>
			<span>
				Output:<br />
				{{ output === undefined ? 'Edit the text to see the changes' : output }}
			</span>
		</fedex-notification>
		${templates[template]}
		${storybookCodeExample(templates.default)}
	`,
  props: {
    visible: boolean('visible', visible),
  },
});

export const textEditor = () => ({ ...story() });
export const textEditorToggle = () => ({ ...story('toggle', false) });
