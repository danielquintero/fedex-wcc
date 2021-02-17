import { radios, text } from '@storybook/addon-knobs';
import { dummyTextMock } from '@fedex/testing/mocks';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { NotificationComponent } from './notification.component';

export default {
  title: 'Notifications',
};

const templates = {
  default: `
		<fedex-notification type="{{ type }}" status="{{ status }}" css="{{ css }}">
			<fedex-icon type="{{ icon }}"></fedex-icon>
			<span>
				${dummyTextMock.lorum.line}<br />
				<span class="fedex-notification_subtext">Feb 4 2021, 10:57:14 AM</span>
			</span>
			<fedex-button type="button" action="ghost" label="Button" size="small"></fedex-button>
		</fedex-notification>
		`,
  alert: `
		<fedex-notification type="{{ type }}" status="{{ status }}" css="{{ css }}">
			<fedex-icon type="{{ icon }}"></fedex-icon>
			<span>
				${dummyTextMock.lorum.line}<br />
				<span class="fedex-notification_subtext">${dummyTextMock.lorum.paragraph}</span>
			</span>
			<fedex-button type="button" action="ghost" label="Close" icon="close" iconOnly="true"></fedex-button>
		</fedex-notification>
		`,
};

const story = (
  type: 'default' | 'alert',
  status: 'info' | 'error' | 'success' | 'warning',
  icon: 'done' | 'error' | 'history' | 'info' | 'warning'
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: NotificationComponent,
  template: `
		${storybookHeader('Notifications')}
		${templates[type]}
		${storybookCodeExample(templates[type])}
	`,
  props: {
    type: radios(
      'type',
      {
        default: 'default',
        alert: 'alert',
      },
      type
    ),
    status: radios(
      'status',
      {
        info: 'info',
        error: 'error',
        success: 'success',
        warning: 'warning',
      },
      status
    ),
    icon: radios(
      'icon',
      {
        done: 'done',
        error: 'error',
        history: 'history',
        info: 'info',
        warning: 'warning',
      },
      icon
    ),
    css: text('css', ''),
  },
});

export const notificationInfo = () => ({
  ...story('default', 'info', 'history'),
});
export const notificationError = () => ({
  ...story('default', 'error', 'error'),
});
export const notificationSuccess = () => ({
  ...story('default', 'success', 'done'),
});
export const notificationWarning = () => ({
  ...story('default', 'warning', 'warning'),
});

export const alertInfo = () => ({ ...story('alert', 'info', 'info') });
export const alertError = () => ({ ...story('alert', 'error', 'error') });
export const alertSuccess = () => ({ ...story('alert', 'success', 'done') });
export const alertWarning = () => ({ ...story('alert', 'warning', 'warning') });
