import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '../icon/icon.component';
import { FormRadioComponent } from './form-radio.component';

describe('FormRadioComponent', () => {
	let spectator: Spectator<FormRadioComponent>;
	const createComponent = createComponentFactory({
		component: FormRadioComponent,
		declarations: [IconComponent],
		imports: [],
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
			props: {
				css: '',
				checked: true,
				id: 'id-1234',
				icon: 'mail',
				iconPosition: 'right',
				fullWidth: true,
				label: 'Radio label',
				labelPosition: 'right',
				name: 'radio-group-name',
				tag: 'yellow',
				value: 'a value',
			},
		});
		expect(spectator.component).toBeInstanceOf(FormRadioComponent);
	});
});
