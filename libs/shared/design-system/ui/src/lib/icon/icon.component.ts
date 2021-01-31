import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fedexIcon } from '@fedex/design-system/icons';
import { iconAcademicCap } from '@fedex/design-system/icons';

@Component({
  selector: 'fedex-ui-icon',
  template: `
    <ng-content #svgContainer></ng-content>

    <!-- <i #svgContainer></i> -->
    <!-- Icon -->
    <i
      #svgContainer
      class="material-icons mat-icon fedex-icon {{ css }} icon-{{
        icon.name
      }} size-{{ size }} color-{{ color }}"
      role="img"
      focusable="false"
      aria-hidden="true"
      tabindex="-1"
      aria-label="icon"
      i18n-aria-label="@@uiComponentIconAriaLabel"
    >
      <!-- {{ icon.data }} -->
    </i>
  `,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit, AfterViewInit {
  @ViewChild('svgContainer') svgContainer!: ElementRef;

  @Input() public readonly icon = iconAcademicCap;
  // @Input() public readonly type = iconAcademicCap;
  @Input() public readonly css!: string;
  @Input() readonly color: 'default' | 'primary' | 'accent' | 'warn' =
    'default';
  @Input() readonly size: 'small' | 'regular' = 'regular';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.svgContainer.nativeElement.innerHTML = this.icon.data;
  }
}
