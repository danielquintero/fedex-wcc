import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fedex-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() readonly name!: string;
  @Input() readonly size: 'small' | 'regular' | 'large' | 'extra-large' =
    'regular';
  @Input() readonly image: string | undefined;
}
