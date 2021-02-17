import { UiComponentsModule } from '../components.module';
import { NotFoundPageComponent } from './not-found-page.component';

export default {
	title: 'Page Not Found',
};

export const pageNotFound = () => ({
	moduleMetadata: {
		imports: [UiComponentsModule],
	},
	component: NotFoundPageComponent,
	props: {},
});
