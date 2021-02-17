import { MatSnackBarModule } from '@angular/material/snack-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { hot } from 'jest-marbles';
import { Observable } from 'rxjs';
import { SnackbarUponActionComponent } from './snackbar-upon-action.component';

describe('SnackbarUponActionComponent', () => {
	let spectator: Spectator<SnackbarUponActionComponent>;
	let actions$: Observable<Action>;

	const createComponent = createComponentFactory({
		component: SnackbarUponActionComponent,
		imports: [MatSnackBarModule],
		providers: [provideMockActions(() => actions$)],
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should create the component', () => {
		expect(spectator.component).toBeInstanceOf(SnackbarUponActionComponent);
	});

	// TODO implement tests
	xit('should create the component', () => {
		expect(spectator.component).toBeInstanceOf(SnackbarUponActionComponent);

		actions$ = hot('-a-', {
			a: 'fetchSomethingError',
		});
	});
});
