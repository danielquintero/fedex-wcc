import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { randomIdSuffix } from '@fedex/shared/utils';
//
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line prettier/prettier
import quillCssUrl from 'file-loader!extract-loader!node_modules/quill/dist/quill.snow.css';
import QuillType, { TextChangeHandler } from 'quill';
import { combineLatest, defer, from, Observable, Observer, of } from 'rxjs';
import { map, share } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'fedex-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextEditorComponent
  implements AfterViewInit, OnDestroy, OnChanges {
  @Input() content!: string;
  @Output() readonly contentChanged: EventEmitter<string> = new EventEmitter();

  readonly id: string = `fedex-text-editor-${randomIdSuffix()}`;
  readonly labelFontBold: string = $localize`:@@uiComponentTextEditorFontBold:Bold`;
  readonly labelFontItalic: string = $localize`:@@uiComponentTextEditorFontItalic:Italic`;
  readonly labelFontUnderline: string = $localize`:@@uiComponentTextEditorFontUnderline:Underline`;
  readonly labelAlignLeft: string = $localize`:@@uiComponentTextEditorAlignLeft:Align left`;
  readonly labelAlignCenter: string = $localize`:@@uiComponentTextEditorAlignLeft:Align center`;
  readonly labelAlignRight: string = $localize`:@@uiComponentTextEditorAlignLeft:Align right`;
  readonly labelAlignJustify: string = $localize`:@@uiComponentTextEditorAlignLeft:Align justify`;
  readonly labelListOrdered: string = $localize`:@@uiComponentTextEditorListOrdered:Ordered list`;
  readonly labelListBullet: string = $localize`:@@uiComponentTextEditorListBullet:Bullet list`;
  readonly placeholder: string = $localize`:@@uiComponentTextEditorPlaceholder:Type something...`;

  private editor!: QuillType | undefined;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quilImportScript(): Observable<any> {
    return defer(() => from(import('quill'))).pipe(
      map((imported) => (imported.default ? imported.default : imported)),
      share()
    );
  }

  quillImportStyle(): Observable<boolean> {
    return this.document.getElementById('lazy-quill-snow')
      ? of(true)
      : new Observable((observer: Observer<boolean>) => {
          const style = this.document.createElement('link');
          style.setAttribute('type', 'text/css');
          style.setAttribute('id', 'lazy-quill-snow');
          style.setAttribute('href', quillCssUrl);
          style.setAttribute('rel', 'stylesheet');
          // eslint-disable-next-line functional/immutable-data
          style.onload = () => {
            observer.next(true);
            observer.complete();
          };

          /* eslint-enable functional/immutable-data */
          this.document.getElementsByTagName('head')[0].appendChild(style);
        });
  }

  textChangeHandler: TextChangeHandler = (delta, oldDelta, source): void => {
    if (source === 'user') {
      const html = this.editor?.root.innerHTML;
      this.contentChanged.emit(
        html === '<p><br></p>' || html === '<div><br><div>' ? '' : html
      );
    }
  };

  ngAfterViewInit() {
    combineLatest([this.quillImportStyle(), this.quilImportScript()])
      .pipe(untilDestroyed(this))
      .subscribe(([, quill]) => {
        // eslint-disable-next-line functional/immutable-data
        this.editor = new quill(`#${this.id}`, {
          theme: 'snow',
          placeholder: this.placeholder,
          modules: {
            toolbar: `#${this.id}-toolbar`,
          },
        }) as QuillType;

        // accessibility fix
        this.editor
          .getModule('toolbar')
          .container.querySelectorAll('svg')
          .forEach((svg: SVGElement) => {
            svg.setAttribute('tabindex', '-1');
            svg.setAttribute('focusable', 'false');
          });

        this.editor.on('text-change', this.textChangeHandler);
      });
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.off('text-change', this.textChangeHandler);

      // eslint-disable-next-line functional/immutable-data
      this.editor = undefined;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.editor && changes.content) {
      // eslint-disable-next-line functional/immutable-data
      this.editor.root.innerHTML = changes.content.currentValue;
    }
  }
}
