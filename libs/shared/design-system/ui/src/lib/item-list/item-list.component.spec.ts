import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
	let spectator: Spectator<ItemListComponent>;

	const createComponent = createComponentFactory({
		component: ItemListComponent,
		declarations: [ButtonComponent, IconComponent],
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
		});
		expect(spectator.component).toBeInstanceOf(ItemListComponent);
	});
});
