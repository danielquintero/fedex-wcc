import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { fromEvent, merge, Observable } from 'rxjs';
import { distinctUntilChanged, map, share, startWith } from 'rxjs/operators';

/**
 * I've actually submitted an issue to the @ng-web-apis/common project as a feature
 * request to implement this also in their repo.
 *
 * @see https://github.com/ng-web-apis/common/issues/17
 *
 */
export const WINDOW_FOCUS = new InjectionToken<Observable<boolean>>(
	'Shared Observable based on `window focus/blurred events`',
	{
		factory: () => {
			const windowRef = inject(WINDOW);

			return merge(fromEvent(windowRef, 'focus'), fromEvent(windowRef, 'blur')).pipe(
				startWith({ type: 'focus' }),
				map(({ type }) => type === 'focus'),
				distinctUntilChanged(),
				share(),
			);
		},
	},
);
