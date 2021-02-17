import { text } from '@storybook/addon-knobs';
import { dummyTextMock } from '@fedex/testing/mocks';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { ModalComponent } from './modal.component';

export default {
  title: 'Modal',
};

const instructions = `
	<p class="mb-6">
		Open the modal by clicking the button<br />
		When opened the close button should get focus<br />
		<br />
		<strong>Key events:</strong><br />
		TAB or SHIFT + TAB: the focus should stay within the modal<br />
		ESC: closes the modal, removes focus<br />
		ENTER: (close button) closes the modal, removes focus<br />
		<br />
		<strong>Click events:</strong><br />
		Close button: closes the modal<br />
		Click outside: closes the modal<br />
		<br />
		<strong>Usage:</strong><br />
		Add the modal to your HTML with fedex-modal. <br />
		Content can be added in a div with class modal-body. The modal-footer class can be used for footers.<br />
		The modal is hidden by default. You can call the modal's show() and hide() functions to show or hide it, respectively.<br />
		If you've annotated the modal with a #modal, modal.show() is available in HTML. <br />
		Otherwise, you can access it through a viewChild on the parent component.<br />
	</p>
	<fedex-button type="button" action="primary" (click)="modal.show()" label="open modal"></fedex-button>
	`;

const templates = {
  default: `
		<fedex-modal title="{{ title }}" #modal>
			<div modal-body>
				${dummyTextMock.lorum.paragraph}
			</div>
		</fedex-modal>`,
  footer: `
		<fedex-modal title="{{ title }}" #modal>
			<div modal-body>
				${dummyTextMock.lorum.full}
			</div>
			<div modal-footer>
				<div class="fedex-button-group">
					<fedex-button type="button" action="primary" label="Confirm" icon="check"></fedex-button>
					<fedex-button type="button" action="secondary" label="Cancel" icon="close"></fedex-button>
				</div>
			</div>
		</fedex-modal>`,
};

const story = (template: 'default' | 'footer' = 'default'): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: ModalComponent,
  template: `
		${storybookHeader('Modal')}
		${instructions}
		${templates[template]}
		${storybookCodeExample(templates[template])}
	`,
  props: {
    title: text('title', 'I am the modal title'),
  },
});

export const modal = () => ({ ...story('default') });
export const modalWithFooter = () => ({ ...story('footer') });
