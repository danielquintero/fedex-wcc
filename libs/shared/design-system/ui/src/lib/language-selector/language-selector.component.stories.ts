import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { I18nService, I18N_CONFIG } from '@fedex/shared/core';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { MATERIAL_MODULES, UiComponentsModule } from '../components.module';
import { LanguageSelectorComponent } from './language-selector.component';

const template = `
	<fedex-language-selector></fedex-language-selector>
`;

export default {
  title: 'Language Selector',
};

const story = (): object => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      UiComponentsModule,
      ...MATERIAL_MODULES,
      HttpClientModule,
    ],
    providers: [
      { provide: I18N_CONFIG, useValue: { languages: ['en', 'nl'] } },
      I18nService,
    ],
  },
  component: LanguageSelectorComponent,
  template: `
		${storybookHeader('Language selector')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {},
});

export const languageSelector = () => ({ ...story() });
