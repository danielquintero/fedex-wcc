import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ItemModel } from './models/item-model';

@Component({
  selector: 'fedex-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  @Input() readonly items: Array<ItemModel> = [];
  @Input() readonly showButton: boolean = true;
  @Input() readonly showDivider: boolean = true;
  @Output() readonly buttonEmitter: EventEmitter<Event> = new EventEmitter();

  trackById(index: number, el: ItemModel) {
    return el.id;
  }
}
