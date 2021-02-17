import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
	let spectator: Spectator<AvatarComponent>;
	const createComponent = createComponentFactory({
		component: AvatarComponent,
		declarations: [],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				name: 'Firstname Lastname',
				size: 'regular',
				image: '//url.to/my-image.jpg',
			},
		});
		expect(spectator.component).toBeInstanceOf(AvatarComponent);
	});
});
