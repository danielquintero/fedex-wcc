import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fedex-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() readonly css!: string;
  @Input() readonly type: 'default' | 'alert' = 'default';
  @Input() readonly status: 'info' | 'error' | 'success' | 'warning' = 'info';
}
