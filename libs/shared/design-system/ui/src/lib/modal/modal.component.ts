import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  FOCUSABLE_ELEMENT_SELECTORS,
  focusTrap,
  randomIdSuffix,
} from '@fedex/shared/utils';
import { fromEvent, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'fedex-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modal') modal!: ElementRef;
  @Input() readonly title!: string;

  visible = false;
  readonly id = `fedex-modal-${randomIdSuffix()}`;
  private focusableElements!: ReadonlyArray<HTMLElement>;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.bindModalEvents();
  }

  modalKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.hide();
      this.cdr.detectChanges();
    }
    if (event.key === 'Tab') {
      focusTrap(event, this.focusableElements);
    }
  }

  modalClick(event: MouseEvent) {
    if ((<Element>event.target).classList.contains('fedex-modal_wrapper')) {
      this.hide();
    }
  }

  bindModalEvents() {
    fromEvent<KeyboardEvent>(this.document.body, 'keydown')
      .pipe(
        untilDestroyed(this),
        filter(() => this.visible)
      )
      .subscribe((event: KeyboardEvent) => this.modalKeyDown(event));
    of(true)
      .pipe(
        untilDestroyed(this),
        filter(() => this.visible),
        delay(100)
      )
      .subscribe(() => this.focusableElements[0]?.focus()); // bubbling
  }

  ngAfterViewInit() {
    // eslint-disable-next-line
    this.focusableElements = Array.from(
      this.modal.nativeElement.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)
    );
  }

  show() {
    // eslint-disable-next-line functional/immutable-data
    this.visible = true;
    this.cdr.detectChanges();
  }

  hide() {
    // eslint-disable-next-line functional/immutable-data
    this.visible = false;
    this.cdr.detectChanges();
  }
}
