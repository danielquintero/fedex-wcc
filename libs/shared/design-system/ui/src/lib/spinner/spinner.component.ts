import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'fedex-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() progress = 0;
  @Input() diameter: number | string = 48;
  @Input() color = 'var(--color-primary);';
}
