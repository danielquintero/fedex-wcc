import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { NotFoundPageComponent } from './not-found-page.component';

describe('DummyPageComponent', () => {
	let spectator: SpectatorRouting<NotFoundPageComponent>;

	const createComponent = createRoutingFactory({
		component: NotFoundPageComponent,
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should create the component', () => {
		expect(spectator.component).toBeInstanceOf(NotFoundPageComponent);
	});
});
