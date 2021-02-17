import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
	let spectator: Spectator<IconComponent>;
	const createComponent = createComponentFactory({
		component: IconComponent,
		declarations: [],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				type: 'file_download',
				color: 'primary',
				css: 'extra-css_class',
				size: 'small',
			},
		});
		expect(spectator.component).toBeInstanceOf(IconComponent);
	});
});
