import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fedex-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() readonly type!: string;
  @Input() readonly color: string = 'default';
  @Input() readonly css!: string;
  @Input() readonly size: string = 'regular';
}
