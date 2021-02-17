import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '../icon/icon.component';
import { MailBatchAttachmentComponent } from './mail-batch-attachment.component';

describe('MailBatchAttachmentComponent', () => {
	let spectator: Spectator<MailBatchAttachmentComponent>;
	const createComponent = createComponentFactory({
		component: MailBatchAttachmentComponent,
		declarations: [IconComponent],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				url: 'http://www.somelink.com',
			},
		});
		expect(spectator.component).toBeInstanceOf(MailBatchAttachmentComponent);
	});
});
