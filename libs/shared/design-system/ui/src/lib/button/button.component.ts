import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'fedex-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  readonly label: string = $localize`:@@uiComponentButtonLabel:Button Label`;
  @Input() readonly id!: string;
  @Input() readonly icon: string = '';
  @Input() readonly disabled: boolean = false;
  @Input() readonly iconOnly: boolean = false;
  @Input() readonly uppercase: boolean = false;
  @Input() readonly isFab: boolean = false;
  @Input() readonly size: 'small' | 'regular' | 'large' = 'regular';
  @Input() readonly action: 'primary' | 'secondary' | 'ghost' | 'link' =
    'primary';
  @Input() readonly type: 'button' | 'submit' = 'button';
  @Input() readonly iconPosition: 'left' | 'right' = 'left';
  @Input() readonly css!: string;
  @Input() readonly ariaControls!: string;
  @Input() readonly ariaExpanded!: string;
  @Input() readonly ariaLabelledBy!: string;
  @Output() readonly clickEmitter: EventEmitter<Event> = new EventEmitter();
}
