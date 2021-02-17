import { UiComponentsModule } from '../../src/lib/components.module';
import { storybookCodeExample } from './storybook.code-example';
import { storybookHeader } from './storybook.header';

export default {
  title: 'Styleguide / Colors',
};

const computed: CSSStyleDeclaration = getComputedStyle(document.body);
/* eslint-disable  */
const template = `
	<p><strong>fedex-Colors defined in :root var(--color-name)</strong></p>
	${[...computed]
    .filter((style) => style.search(/(--)(^|[^mat][^tw])/g) > -1)
    .map(
      (style) => `
			<div class="inline-block w-20 m-10 align-top">
				<div class="w-24 h-24 shadow-lg rounded-full" style="background-color:${computed
          .getPropertyValue(style)
          .trim()}"></div>
				<p class="w-24 text-center text-gray-600 mt-4">var(${style})</p>
			</div>
		`
    )
    .sort()
    .join('')}
	<br />
	<p><strong>Material-Colors defined in :root var(--color-name)</strong></p>
	${[...computed]
    .filter((style) => style.search(/(--mat)/g) > -1)
    .map(
      (style) => `
			<div class="inline-block w-20 m-10 align-top">
				<div class="w-24 h-24 shadow-lg rounded-full" style="background-color:${computed
          .getPropertyValue(style)
          .trim()}"></div>
				<p class="w-24 text-center text-gray-600 mt-4">var(${style})</p>
			</div>
		`
    )
    .sort()
    .join('')}
`;
/* eslint-enable */

const story = (): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  template: `
		${storybookHeader('Styleguide - Colors')}
		${template}
		${storybookCodeExample(`
			css:
			@apply text-color-primary;
			color: $text-color-primary
			color: var(color-primary)
		`)}
	`,
});

export const colors = () => ({ ...story() });
