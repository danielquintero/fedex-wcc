import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType } from '@ngrx/effects';
import { Action, ActionCreator } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fedex-snackbar-upon-action',
  templateUrl: './snackbar-upon-action.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarUponActionComponent implements OnInit, OnDestroy {
  @Input()
  readonly action!: Action;

  @Input()
  readonly duration: number = 5000;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output()
  readonly onAction: EventEmitter<void> = new EventEmitter<void>();

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output()
  readonly onDismissed: EventEmitter<void> = new EventEmitter<void>();

  // eslint-disable-next-line , @typescript-eslint/no-explicit-any
  @ViewChild('message', { static: true }) messageRef!: TemplateRef<any>;

  // eslint-disable-next-line
  private sub!: Subscription;

  constructor(
    private readonly actions$: Actions,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // eslint-disable-next-line
    this.sub = this.actions$
      .pipe(ofType(this.action as ActionCreator))
      .subscribe(() => {
        const snack = this.snackBar.openFromTemplate(this.messageRef, {
          duration: this.duration,
        });
        snack.onAction().subscribe(() => {
          this.onAction.emit();
        });
        snack.afterDismissed().subscribe(() => {
          this.onDismissed.emit();
        });
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
