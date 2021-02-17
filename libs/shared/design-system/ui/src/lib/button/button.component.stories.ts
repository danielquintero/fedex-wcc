import { action as actionAddon } from '@storybook/addon-actions';
import { boolean, button, radios, text } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
};

const templates = {
  buttons: `
		<div class="fedex-button-group">
			<fedex-button
				icon="delete"
				id="id-1234-1"
				label="{{ label }}"
				size="{{ size }}"
				type="{{ type }}"
				action="{{ action }}"
				iconPosition="{{ iconPosition }}"
				[disabled]="disabled"
				[uppercase]="uppercase"
				[iconOnly]="iconOnly"
				[isFab]="isFab">
			</fedex-button>
			<fedex-button
				id="id-1234-1"
				label="{{ label }}"
				size="{{ size }}"
				type="{{ type }}"
				action="{{ action }}"
				iconPosition="left"
				[disabled]="disabled"
				[uppercase]="uppercase"
				[iconOnly]="iconOnly"
				[isFab]="isFab">
			</fedex-button>
			<fedex-button
				icon="delete"
				id="id-1234-3"
				label="{{ label }}"
				size="{{ size }}"
				type="{{ type }}"
				action="{{ action }}"
				iconPosition="right"
				[disabled]="disabled"
				[uppercase]="uppercase"
				[iconOnly]="iconOnly"
				[isFab]="isFab">
			</fedex-button>
			<fedex-button
				icon="delete"
				id="{{ id }}-4"
				label="{{ label }}"
				size="{{ size }}"
				type="{{ type }}"
				action="{{ action }}"
				iconPosition="right"
				[disabled]="disabled"
				[uppercase]="uppercase"
				[iconOnly]="true"
				[isFab]="isFab">
			</fedex-button>
		</div>
	`,
  fab: `
		<fedex-button icon="delete"
			id="id-1234-1"
			label="{{ label }}"
			size="{{ size }}"
			type="{{ type }}"
			action="{{ action }}"
			iconPosition="{{ iconPosition }}"
			[disabled]="disabled"
			[uppercase]="uppercase"
			[iconOnly]="iconOnly"
			[isFab]="true">
		</fedex-button>
		<p>Button appears on the bottom right :)</p>
	`,
  combined: `
		<div class="fedex-button-group">
			<fedex-button
				icon="mail"
				id="id-1234-1"
				label="{{ label }}"
				size="{{ size }}"
				type="{{ type }}"
				action="{{ action }}"
				iconPosition="{{ iconPosition }}"
				[disabled]="disabled"
				[uppercase]="uppercase"
				[iconOnly]="iconOnly"
				[isFab]="isFab">
			</fedex-button>
			<fedex-button
				icon="close"
				id="id-1234-2"
				label="Button"
				action="secondary"
				size="{{ size }}"
				iconPosition="left">
			</fedex-button>
			<fedex-button
				icon="arrow_forward"
				id="id-1234-3"
				label="Button"
				action="ghost"
				size="{{ size }}"
				iconPosition="right">
			</fedex-button>
		</div>
	`,
};

const buttonEmitterAction = {
  clickEmitter: actionAddon('clickEmitter'),
};

const story = (
  action: 'primary' | 'ghost' | 'secondary' | 'link',
  label: string,
  disabled: boolean = false,
  size: 'small' | 'regular' | 'large',
  template: 'buttons' | 'fab' | 'combined' = 'buttons',
  uppercase: boolean | undefined = undefined,
  iconOnly: boolean | undefined = undefined,
  type: 'button' | 'submit' = 'button',
  iconPosition: 'left' | 'right' = 'left'
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: ButtonComponent,
  template: `
		${storybookHeader('Buttons')}
		${templates[template]}
		${storybookCodeExample(templates[template])}
	`,
  props: {
    label: text('label', label),
    action: radios(
      'action',
      {
        primary: 'primary',
        secondary: 'secondary',
        ghost: 'ghost',
        link: 'link',
      },
      action
    ),
    size: radios(
      'size',
      { small: 'small', regular: 'regular', large: 'large' },
      size
    ),
    type: radios('type', { submit: 'submit', button: 'button' }, type),
    iconPosition: radios(
      'iconPosition',
      { left: 'left', right: 'right' },
      iconPosition
    ),
    iconOnly:
      iconOnly !== undefined ? boolean('iconOnly', iconOnly) : undefined,
    uppercase:
      uppercase !== undefined ? boolean('uppercase', uppercase) : undefined,
    disabled: boolean('disabled', disabled),
    clickEmitter: buttonEmitterAction.clickEmitter,
    focus: button('Add keyboard focus', () =>
      document.getElementById('fedex-button-id-1234-1')?.focus()
    ),
  },
});

/**
 * Primary variants
 */
export const buttonPrimary = () => ({
  ...story('primary', 'Button', undefined, 'regular'),
});

export const buttonPrimaryDisabled = () => ({
  ...story('primary', 'Button', true, 'regular'),
});

export const buttonPrimarySmall = () => ({
  ...story('primary', 'Button', undefined, 'small'),
});

export const buttonPrimaryLarge = () => ({
  ...story('primary', 'Button', undefined, 'large'),
});

/**
 * Secondary variants
 */
export const buttonSecondary = () => ({
  ...story('secondary', 'Button', undefined, 'regular'),
});

export const buttonSecondaryDisabled = () => ({
  ...story('secondary', 'Button', true, 'regular'),
});

export const buttonSecondarySmall = () => ({
  ...story('secondary', 'Button', undefined, 'small'),
});

export const buttonSecondaryLarge = () => ({
  ...story('secondary', 'Button', undefined, 'large'),
});

/**
 * Ghost variants
 */
export const buttonGhost = () => ({
  ...story('ghost', 'Button', undefined, 'regular'),
});

export const buttonGhostDisabled = () => ({
  ...story('ghost', 'Button', true, 'regular'),
});

export const buttonGhostSmall = () => ({
  ...story('ghost', 'Button', undefined, 'small'),
});

export const buttonGhostLarge = () => ({
  ...story('ghost', 'Button', undefined, 'large'),
});

/**
 * FAB variants
 */
export const buttonFab = () => ({
  ...story('primary', 'Fab button', undefined, 'regular', 'fab'),
});

export const buttonFabDisabled = () => ({
  ...story('primary', 'Fab button', true, 'regular', 'fab'),
});

export const buttonFabSmall = () => ({
  ...story('primary', 'Fab button', undefined, 'small', 'fab'),
});

export const buttonFabLarge = () => ({
  ...story('primary', 'Fab button', undefined, 'large', 'fab'),
});

/**
 * Combined
 */
export const buttonsCombined = () => ({
  ...story('primary', 'button', undefined, 'regular', 'combined'),
});

export const buttonsCombinedSmall = () => ({
  ...story('primary', 'button', undefined, 'small', 'combined'),
});

export const buttonsCombinedLarge = () => ({
  ...story('primary', 'button', undefined, 'large', 'combined'),
});
