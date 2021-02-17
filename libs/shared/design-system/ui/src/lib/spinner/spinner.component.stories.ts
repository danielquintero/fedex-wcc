import { number, radios, text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { SpinnerComponent } from './spinner.component';

export default {
  title: 'Spinner',
};

const template = `
	<fedex-spinner mode="{{ mode }}" progress="{{ progress }}" diameter="{{ diameter }}" color="{{ color }}"></fedex-spinner>
`;

const story = (): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: SpinnerComponent,
  template: `
		${storybookHeader('Spinner')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    mode: radios(
      'mode',
      {
        determinate: 'determinate',
        indeterminate: 'indeterminate',
      },
      'indeterminate'
    ),
    progress: number('progress', 25, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    }),
    diameter: text('diameter', '48'),
    color: radios(
      'color',
      {
        black: 'var(--color-black)',
        primary: 'var(--color-primary)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
      },
      'var(--color-primary)'
    ),
  },
});

export const spinner = () => ({ ...story() });
