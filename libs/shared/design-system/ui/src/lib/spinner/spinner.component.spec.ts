import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SpinnerComponent as ComponentUnderTest } from './spinner.component';

describe(ComponentUnderTest.name, () => {
	let spectator: Spectator<ComponentUnderTest>;
	const createComponent = createComponentFactory({
		component: ComponentUnderTest,
		imports: [],
		mocks: [],
	});

	it('should create', () => {
		spectator = createComponent();

		expect(spectator.component).toBeTruthy();
	});
});
