import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Actions } from '@ngrx/effects';
import { Action, createAction, Store, StoreModule } from '@ngrx/store';
import { action } from '@storybook/addon-actions';
import { number, object } from '@storybook/addon-knobs';
import { Subject } from 'rxjs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';

const actions$ = new Subject<Action>();
const testAction = createAction('[test] test');

export const actionsData = {
  onAction: action('onAction'),
  onDismissed: action('onDismissed'),
};

@Component({
  selector: 'fedex-test',
  template:
    '<fedex-button (click)="sendAction()" label="Test me"></fedex-button>',
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Dummy implements OnInit {
  constructor(
    private readonly store: Store,
    private readonly actions: Actions
  ) {}

  ngOnInit(): void {
    console.log(this.actions);
    console.log(actions$);
    this.actions.subscribe((x) => console.log('sadsa', x));
    actions$.subscribe((x) => console.log('sadsa', x));
  }

  sendAction() {
    actions$.next(testAction());
    this.store.dispatch(testAction());
  }
}

export default {
  title: 'Snackbar Upon Action',
  excludeStories: /.*(Data|Dummy)$/,
};

const template = `
	<fedex-snackbar-upon-action
			[action]="action"
			[duration]="duration"
			(onAction)="closed($event)"
			(onDismissed)="onDismissed($event)">
			<div>Hi i am a snackbar</div>
	</fedex-snackbar-upon-action>
	`;

export const snackbarUponAction = () => ({
  moduleMetadata: {
    declarations: [Dummy],
    imports: [
      UiComponentsModule,
      BrowserAnimationsModule,
      MatSnackBarModule,
      StoreModule.forRoot({}),
    ],
    providers: [{ provide: Actions, useValue: actions$ }],
  },
  component: Dummy,
  template: `
		${storybookHeader('Spinner')}
		<fedex-test></fedex-test>
		<p class="mt-4">Snackbar appears at the bottom :)</p>
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    action: object('action', testAction()),
    duration: number('duration', 5000),
    onAction: actionsData.onAction,
    onDismissed: actionsData.onDismissed,
  },
});
