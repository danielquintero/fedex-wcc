import { text } from '@storybook/addon-knobs';
import { dummyTextMock } from '@fedex/testing/mocks';
import { UiComponentsModule } from '../../src/lib/components.module';
import { storybookCodeExample } from './storybook.code-example';
import { storybookHeader } from './storybook.header';

export default {
  title: 'Styleguide / Text',
};

const template = `
	<h1>Heading 1 - {{ text }}</h1>
	<h2>Heading 2 - {{ text }}</h2>
	<h3>Heading 3 - {{ text }}</h3>
	<h4>Heading 4 - {{ text }}</h4>
	<h5>Heading 5 - {{ text }}</h5>
	<h6>Heading 6 - {{ text }}</h6>
`;

const story = (): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  template: `
		${storybookHeader('Styleguide - Headings')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    text: text('text', dummyTextMock.heading),
  },
});

export const headings = () => ({ ...story() });
