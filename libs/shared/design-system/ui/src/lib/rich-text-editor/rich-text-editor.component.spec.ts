import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { RichTextEditorComponent } from './rich-text-editor.component';

describe('RichTextEditorComponent', () => {
	let spectator: Spectator<RichTextEditorComponent>;
	const createComponent = createComponentFactory({
		component: RichTextEditorComponent,
	});

	it('should create the component', () => {
		spectator = createComponent({
			detectChanges: true,
		});
		expect(spectator.component).toBeInstanceOf(RichTextEditorComponent);
	});
});
