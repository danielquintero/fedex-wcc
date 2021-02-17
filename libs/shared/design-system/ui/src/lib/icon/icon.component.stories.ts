import { radios } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { IconComponent } from './icon.component';

export default {
  title: 'Icons',
};

const template = `
	<fedex-icon type="{{ type }}" color="{{ color }}" size="{{ size }}"></fedex-icon>
`;

const story = (
  size: 'regular' | 'small',
  color:
    | 'default'
    | 'primary'
    | 'accent'
    | 'info'
    | 'error'
    | 'success'
    | 'warning'
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: IconComponent,
  template: `
		${storybookHeader('Icon')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    size: radios('size', { small: 'small', regular: 'regular' }, size),
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
    type: radios(
      'icon',
      {
        drafts: 'drafts',
        download: 'file_download',
        eye: 'visibility',
        mail: 'mail',
        reply: 'reply',
      },
      'mail'
    ),
  },
});

export const icon = () => ({ ...story('regular', 'default') });
export const iconSmall = () => ({ ...story('small', 'default') });
export const iconWarn = () => ({ ...story('small', 'warning') });
