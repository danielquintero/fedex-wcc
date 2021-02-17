import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { messagesMock } from '@fedex/testing/mocks';
import { IconComponent } from '../icon/icon.component';
import { MailAttachmentComponent } from './mail-attachment.component';

describe('MailAttachmentComponent', () => {
  let spectator: Spectator<MailAttachmentComponent>;
  const createComponent = createComponentFactory({
    component: MailAttachmentComponent,
    declarations: [IconComponent],
    imports: [],
  });

  it('should create the component', () => {
    spectator = createComponent({
      detectChanges: true,
      props: {
        file: messagesMock[0].files[0],
        progress: 0,
        url: 'http://www.somelink.com',
      },
    });
    expect(spectator.component).toBeInstanceOf(MailAttachmentComponent);
  });
});
