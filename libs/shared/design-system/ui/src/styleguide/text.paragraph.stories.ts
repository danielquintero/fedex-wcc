import { radios } from '@storybook/addon-knobs';
import { dummyTextMock } from '@fedex/testing/mocks';
import { UiComponentsModule } from '../../src/lib/components.module';
import { storybookCodeExample } from './storybook.code-example';
import { storybookHeader } from './storybook.header';

export default {
  title: 'Styleguide / Text',
};

const template = `
	<p  class="{{ size }}">
		${dummyTextMock.lorum.full}
	</p>
`;

const story = (size: 'text-sm' | '' | 'text-lg'): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  template: `
		${storybookHeader('Styleguide - Paragraph')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    size: radios(
      'size',
      {
        'small (use: .text-sm)': 'text-sm',
        base: '',
        'large (use: .text-lg)': 'text-lg',
      },
      size
    ),
  },
});

export const paragraph = () => ({ ...story('') });
