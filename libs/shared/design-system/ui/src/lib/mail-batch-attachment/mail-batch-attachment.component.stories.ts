import { text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { MailBatchAttachmentComponent } from './mail-batch-attachment.component';

export default {
  title: 'Mail Batch Attachment',
};

const template = `
	<div class="fedex-mail-batch_wrapper">
		6 <span class="mx-1">Attachments</span> (600KiB)
		<fedex-mail-batch-attachment [url]="url"></fedex-mail-batch-attachment>
	</div>
`;

const story = (): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: MailBatchAttachmentComponent,
  template: `
		${storybookHeader('Mail Batch Attachment')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    url: text('url', 'http://www.somelink.com'),
  },
});

export const mailBatchAttachment = () => ({ ...story() });
