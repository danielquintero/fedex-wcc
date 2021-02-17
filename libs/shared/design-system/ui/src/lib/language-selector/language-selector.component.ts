import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { I18nService, Language } from '@fedex/shared/core';

@Component({
  selector: 'fedex-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent implements OnInit {
  readonly languages: ReadonlyArray<Language> = this.i18nService
    .availableLanguages;

  // cannot be readonly because of material select ;(
  currentLanguage!: string;

  constructor(private readonly i18nService: I18nService) {}

  ngOnInit() {
    // eslint-disable-next-line
    this.currentLanguage = this.i18nService.getCurrentLanguage();
  }

  switchLanguage(lang: Language) {
    this.i18nService.switchToLanguageIfNotCurrent(lang.code);
  }

  trackByCode(index: number, el: Language) {
    return el.code;
  }
}
