import { text } from '@storybook/addon-knobs';
import { UiComponentsModule } from '../../src/lib/components.module';
import { storybookCodeExample } from './storybook.code-example';
import { storybookHeader } from './storybook.header';

export default {
  title: 'Styleguide / Text',
};

const template = `
	<a href="#" class="fedex-link">{{ text }}</a><br />
`;

const paragraph = `
	<p class="mt-10">a representation of <a href="#" class="fedex-link">{{ text }}</a> inside a paragraph</p>
`;

const story = (): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  template: `
		${storybookHeader('Styleguide - Links')}
		${template}
		${paragraph}
		${storybookCodeExample(template)}
	`,
  props: {
    text: text('text', 'a link'),
  },
});

export const link = () => ({ ...story() });
