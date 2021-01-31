import { radios } from '@storybook/addon-knobs';
import { SharedDesignSystemUiModule } from '../shared-design-system-ui.module';
import { IconComponent } from './icon.component';

export default {
  title: 'Icons',
};

const story = (
  size: 'regular' | 'small',
  color: 'default' | 'primary' | 'accent' | 'warn'
): object => ({
  moduleMetadata: {
    imports: [SharedDesignSystemUiModule],
  },
  component: IconComponent,
  props: {
    size: radios('size', { small: 'small', regular: 'regular' }, size),
    color: radios(
      'color',
      {
        default: 'default',
        primary: 'primary',
        accent: 'accent',
        warn: 'warn',
      },
      color
    ),
    iconName: radios(
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
export const iconWarn = () => ({ ...story('small', 'warn') });
