import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fedex-mail-batch-attachment',
  templateUrl: './mail-batch-attachment.component.html',
  styleUrls: ['./mail-batch-attachment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailBatchAttachmentComponent {
  @Input() readonly url!: string;
}
