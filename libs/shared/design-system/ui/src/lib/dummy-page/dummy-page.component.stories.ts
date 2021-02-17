import { ActivatedRoute } from '@angular/router';
import { DummyPageModule } from './dummy-page.module';
import { DummyPageComponent } from './dummy-page.component';

export default {
  title: 'Dummy Page',
};

export const dummyPage = () => ({
  moduleMetadata: {
    imports: [DummyPageModule],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: { snapshot: { url: ['storybook'] } },
      },
    ],
  },
  component: DummyPageComponent,
  props: {},
});
