import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessageFileEntity } from '@fedex/shared/api-types';

@Component({
  selector: 'fedex-mail-attachment',
  templateUrl: './mail-attachment.component.html',
  styleUrls: ['./mail-attachment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailAttachmentComponent {
  @Input() readonly file!: MessageFileEntity;
  @Input() readonly progress: number | boolean = false;
  @Input() readonly url!: string;
}
