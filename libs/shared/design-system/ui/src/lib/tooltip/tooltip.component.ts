import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { randomIdSuffix } from '@fedex/shared/utils';
import { fromEvent } from 'rxjs';
import { CollisionDetectionService } from '../services/collision-detection.service';

@UntilDestroy()
@Component({
  selector: 'fedex-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent implements AfterViewInit {
  @ViewChild('tooltip') tooltip!: ElementRef;
  @Input() readonly css!: string;
  @Input() readonly color: string = 'default';
  @Input() readonly icon!: string;
  @Input() readonly label!: string;
  @Input() readonly size: string = 'regular';
  readonly id: string = `fedex-tooltip-${randomIdSuffix()}`;
  private buttonElement!: HTMLButtonElement;
  private tipElement!: HTMLSpanElement;
  private wrapperElement!: HTMLSpanElement;

  constructor(
    @Inject(WINDOW) private readonly windowRef: Window,
    private readonly collisionDetection: CollisionDetectionService
  ) {}

  toggle(): void {
    if (this.buttonElement.getAttribute('aria-expanded') === 'false') {
      this.buttonElement.setAttribute('aria-expanded', 'true');
      this.collisionDetection.detect(this.wrapperElement, this.tipElement);
      this.buttonElement.focus();
    } else {
      this.buttonElement.setAttribute('aria-expanded', 'false');
    }
  }

  tooltipMousedown(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.toggle();
  }

  tooltipClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  tooltipKeydown(event: KeyboardEvent) {
    const key: string | false = event.key || false;
    if (key === ' ' || key === 'Spacebar') {
      this.toggle();
    }
    if (
      key === 'Escape' &&
      this.buttonElement.getAttribute('aria-expanded') === 'false'
    ) {
      this.toggle();
    }
  }

  tooltipFocus() {
    this.wrapperElement.classList.add('has-focus');
  }

  tooltipBlur() {
    this.buttonElement.setAttribute('aria-expanded', 'false');
    this.wrapperElement.classList.remove('has-focus');
  }

  ngAfterViewInit(): void {
    /* eslint-disable  */
    this.buttonElement = this.tooltip.nativeElement.querySelector(
      '[type="button"]'
    );
    this.tipElement = this.tooltip.nativeElement.querySelector(
      'span[role="tooltip"]'
    );
    this.wrapperElement = this.tooltip.nativeElement;
    /* eslint-enable */

    fromEvent(this.windowRef, 'resize')
      .pipe(untilDestroyed(this))
      .subscribe(() =>
        this.collisionDetection.detect(this.wrapperElement, this.tipElement)
      );
  }
}
