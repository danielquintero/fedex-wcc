import {
  createDirectiveFactory,
  SpectatorDirective,
} from '@ngneat/spectator/jest';
import { I18nService } from '@fedex/shared/core';
import { SupportPageDirective as DirectiveUnderTest } from './support-page.directive';

describe(DirectiveUnderTest.name, () => {
  let spectator: SpectatorDirective<DirectiveUnderTest>;
  const createDirective = createDirectiveFactory({
    directive: DirectiveUnderTest,
    mocks: [I18nService],
    detectChanges: false,
  });

  beforeEach(() => {
    spectator = createDirective('<a fedexSupportPage="user.html"></a>');

    const i18nService = spectator.inject(I18nService);
    i18nService.getCurrentLanguage.mockImplementationOnce(() => '_LANGUAGE_');

    spectator.detectChanges();
  });

  it('should add a href with the language identifier', () => {
    expect(spectator.element).toHaveProperty(
      'href',
      'https://docs.zivver.com/_LANGUAGE_/user.html'
    );
  });

  it('should add target attribute with _blank', () => {
    expect(spectator.element).toHaveProperty('target', '_blank');
  });

  it('should add an rel attribute with noopener noreferrer', () => {
    expect(spectator.element).toHaveProperty('rel', 'noopener noreferrer');
  });
});
