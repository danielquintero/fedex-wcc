import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '../icon/icon.component';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
	let spectator: Spectator<NotificationComponent>;
	const createComponent = createComponentFactory({
		component: NotificationComponent,
		declarations: [IconComponent],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				css: '',
				type: 'default',
				status: 'success',
			},
		});
		expect(spectator.component).toBeInstanceOf(NotificationComponent);
	});
});
