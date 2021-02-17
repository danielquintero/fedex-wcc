import { radios, text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Avatar',
};

const template = `
	<fedex-avatar size="{{ size }}" image="{{ image }}" name="{{ name }}"></fedex-avatar>
`;

const story = (
  size: 'small' | 'regular' | 'large' | 'extra-large',
  image: boolean
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: AvatarComponent,
  template: `
			${storybookHeader('Avatar')}
			${template}
			${storybookCodeExample(template)}
		`,
  props: {
    name: text('name', 'AS'),
    size: radios(
      'size',
      {
        small: 'small',
        regular: 'regular',
        large: 'large',
        xl: 'extra-large',
      },
      size
    ),
    image: radios(
      'image',
      {
        none: '',
        image:
          '//avatars1.githubusercontent.com/u/612280?s=460&u=63f3eb7acc3094d4e7fcd525f39d0f10bbc160a2&v=4',
      },
      image
        ? '//avatars1.githubusercontent.com/u/612280?s=460&u=63f3eb7acc3094d4e7fcd525f39d0f10bbc160a2&v=4'
        : ''
    ),
  },
});

export const avatarSmall = () => ({ ...story('small', false) });
export const avatarRegular = () => ({ ...story('regular', false) });
export const avatarLarge = () => ({ ...story('large', false) });
export const avatarExtraLarge = () => ({ ...story('extra-large', false) });
export const avatarExtraLargeImage = () => ({ ...story('extra-large', true) });
