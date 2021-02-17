import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
	let spectator: Spectator<ButtonComponent>;
	const createComponent = createComponentFactory({
		component: ButtonComponent,
		declarations: [IconComponent],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				action: 'primary',
				type: 'button',
				size: 'regular',
				label: 'Delete',
				icon: 'delete',
			},
		});
		expect(spectator.component).toBeInstanceOf(ButtonComponent);
	});
});
