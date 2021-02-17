import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { randomIdSuffix } from '@fedex/shared/utils';

@Component({
  selector: 'fedex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() readonly css!: string;
  @Input() readonly elevated: boolean = false;
  @Input() readonly expandable: boolean = false;
  @Input() readonly title!: string;
  @Input() expanded = true;
  readonly id = `fedex-card-${randomIdSuffix()}`;
}
