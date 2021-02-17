import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fedex-dummy-page',
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DummyPageComponent implements OnInit {
  // eslint-disable-next-line
  page!: string;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    try {
      // eslint-disable-next-line
      this.page = (this.route.snapshot.url.length > 0
        ? this.route.snapshot.url
        : ['/']
      ).join('/');
    } catch (error) {
      // happens in a test, but since this is a dummy component to be remove eventually,  not really a big deal
      console.warn('could not get route snapshot', { error });
    }
  }
}
