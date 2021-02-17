import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '../icon/icon.component';
import { FormCheckboxComponent } from './form-checkbox.component';

describe('FormCheckboxComponent', () => {
	let spectator: Spectator<FormCheckboxComponent>;
	const createComponent = createComponentFactory({
		component: FormCheckboxComponent,
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
				label: 'Checkbox label',
				labelPosition: 'right',
				type: 'checkbox',
			},
		});
		expect(spectator.component).toBeInstanceOf(FormCheckboxComponent);
	});
});
