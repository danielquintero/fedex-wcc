import { boolean, text } from '@storybook/addon-knobs';
import { dummyTextMock } from '@fedex/testing/mocks';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { CardComponent } from './card.component';

export default {
  title: 'Card',
};

const notification = `
	<fedex-notification type="default" status="error">
		<fedex-icon type="history"></fedex-icon>
		<span>${dummyTextMock.lorum.line}</span>
		<fedex-button action="ghost" label="Button" size="small"></fedex-button>
	</fedex-notification>
`;

const template = (notify: boolean) => `
	<fedex-card title="{{ title }}" [elevated]="elevated" [expandable]="expandable" [expanded]="expanded">
		${notify ? `<div card-place-at-top>${notification}</div>` : ''}
		<div card-header>
			<h5>Title goes here</h5>
			<span>Secondary title</span>
		</div>
		<div card-body>${dummyTextMock.lorum.paragraph}</div>
		<div card-footer>
			<div class="fedex-button-group">
				<fedex-button action="primary" label="Ok"></fedex-button>
				<fedex-button action="secondary" label="Cancel"></fedex-button>
			</div>
		</div>
	</fedex-card>
	`;

const story = (
  elevated: boolean = false,
  expandable: boolean = false,
  expanded: boolean = true,
  notify: boolean = false
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: CardComponent,
  template: `
		${storybookHeader('Card')}
		${template(notify)}
		${storybookCodeExample(template(notify))}
	`,
  props: {
    elevated: boolean('elevated', elevated),
    expandable: boolean('expandable', expandable),
    expanded: boolean('expanded', expanded),
    title: text('title', 'Card title for screenreaders'),
  },
});

export const card = () => ({ ...story() });
export const cardElevated = () => ({ ...story(true) });
export const cardNotification = () => ({ ...story(false, false, true, true) });
export const cardExpandable = () => ({ ...story(false, true, false) });
export const cardExpandableNotification = () => ({
  ...story(false, true, false, true),
});
