import { button, radios, text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { TooltipComponent } from './tooltip.component';

export default {
  title: 'Tooltip',
};

const template = `
	<fedex-tooltip label="{{ label }}" icon="{{ icon }}" color="{{ color }}" size="{{ size }}"></fedex-tooltip>
`;

/* eslint-disable max-len */
const paragraph = `
	<p class="mt-10">a representation of a <fedex-tooltip label="{{ label }}" icon="{{ icon }}" color="{{ color }}" size="small"></fedex-tooltip> tooltip inside a paragraph</p>
`;
/* eslint-enable */

const story = (
  color:
    | 'default'
    | 'primary'
    | 'accent'
    | 'info'
    | 'error'
    | 'success'
    | 'warning',
  size: 'regular' | 'small'
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: TooltipComponent,
  template: `
		${storybookHeader('Tooltip')}
		${template}
		${paragraph}
		${storybookCodeExample(template)}
	`,
  props: {
    color: radios(
      'color',
      {
        default: 'default',
        primary: 'primary',
        accent: 'accent',
        error: 'error',
        info: 'info',
        success: 'success',
        warning: 'warning',
      },
      color
    ),
    icon: radios(
      'icon',
      {
        drafts: 'drafts',
        download: 'file_download',
        eye: 'visibility',
        mail: 'mail',
        reply: 'reply',
      },
      'drafts'
    ),
    label: text('label', 'I am a label'),
    size: radios('size', { small: 'small', regular: 'regular' }, size),
    focus: button('Add keyboard focus', () => {
      const tip: HTMLButtonElement | null = document.querySelector(
        'button.fedex-tooltip_button'
      );
      if (tip) {
        tip.focus();
      }
    }),
    key: button('Trigger spacebar event', () => {
      const tip: HTMLButtonElement | null = document.querySelector(
        'button.fedex-tooltip_button'
      );
      if (tip) {
        tip.focus();
        tip.dispatchEvent(new KeyboardEvent('keydown', { key: 'Spacebar' }));
      }
    }),
  },
});

export const tooltip = () => ({ ...story('default', 'regular') });
export const tooltipSmall = () => ({ ...story('default', 'small') });
