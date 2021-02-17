import { RouterTestingModule } from '@angular/router/testing';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { MATERIAL_MODULES } from '../components.module';
import { IconComponent } from '../icon/icon.component';
import { DummyPageComponent } from './dummy-page.component';

describe('DummyPageComponent', () => {
	let spectator: SpectatorRouting<DummyPageComponent>;

	const createComponent = createRoutingFactory({
		component: DummyPageComponent,
		declarations: [CardComponent, ButtonComponent, IconComponent],
		imports: [RouterTestingModule, ...MATERIAL_MODULES],
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should create the component', () => {
		expect(spectator.component).toBeInstanceOf(DummyPageComponent);
	});
});
