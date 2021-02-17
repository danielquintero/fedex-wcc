import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '../icon/icon.component';
import { TooltipComponent } from './tooltip.component';

describe('IconComponent', () => {
	let spectator: Spectator<TooltipComponent>;
	const createComponent = createComponentFactory({
		component: TooltipComponent,
		declarations: [IconComponent],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				css: 'extra-css_class',
				color: 'warning',
				icon: 'my-icon',
				label: 'my label',
				size: 'small',
			},
		});
		expect(spectator.component).toBeInstanceOf(TooltipComponent);
	});
});
