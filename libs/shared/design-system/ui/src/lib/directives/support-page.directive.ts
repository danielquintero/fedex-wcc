import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { I18nService } from '@fedex/shared/core';

@Directive({
  selector: 'a[fedexSupportPage]',
})
export class SupportPageDirective implements OnInit {
  @Input() zivSupportPage!: string;

  constructor(
    private readonly elRef: ElementRef,
    private readonly i18nService: I18nService
  ) {}

  ngOnInit() {
    const el = this.elRef.nativeElement;

    // TODO make `docs.zivver.com` configurable
    const url = `https://docs.zivver.com/${this.i18nService.getCurrentLanguage()}/${
      this.zivSupportPage ?? ''
    }`;

    el.setAttribute('href', url);
    el.setAttribute('rel', 'noopener noreferrer');
    el.setAttribute('target', '_blank');
  }
}
