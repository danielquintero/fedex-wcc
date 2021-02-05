import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { NavigationItem } from '../navbar/models/types';

@Component({
  selector: 'fedex-ui-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarNavigationComponent implements OnInit {
  /**
   * The navigation items
   */
  @Input() navigationItems!: Array<NavigationItem>;
  /**
   * The navigation items
   */
  @Input() menuToggle!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
