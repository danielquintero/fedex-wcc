import { radios, text } from '@storybook/addon-knobs';
import { messagesMock } from '@fedex/testing/mocks';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { MailAttachmentComponent } from './mail-attachment.component';

export default {
  title: 'Mail Attachment',
};

const template = `
	<fedex-mail-attachment [file]="file" [url]="url" progress="{{ progress}}"></fedex-mail-attachment>
`;

const story = (
  progress: '' | '0' | '25' | '50' | '75' | '100' = ''
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: MailAttachmentComponent,
  template: `
		${storybookHeader('Mail Attachment')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    file: messagesMock[0].files[0],
    progress: radios(
      'progress',
      {
        none: '',
        zero: '0',
        twentyfive: '25',
        fifty: '50',
        seventyfive: '75',
        hundred: '100',
      },
      progress
    ),
    url: text('url', 'http://www.somelink.com'),
  },
});

export const mailAttachment = () => ({ ...story() });
export const mailAttachmentProgress = () => ({ ...story('75') });
