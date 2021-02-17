import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
	let spectator: Spectator<CardComponent>;
	const createComponent = createComponentFactory({
		component: CardComponent,
		declarations: [IconComponent, ButtonComponent],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				elevated: true,
				expanded: true,
				expandable: false,
				title: 'I am the title',
			},
		});
		expect(spectator.component).toBeInstanceOf(CardComponent);
	});
});
