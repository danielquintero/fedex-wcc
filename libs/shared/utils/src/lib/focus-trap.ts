export const FOCUSABLE_ELEMENT_SELECTORS = [
	'a[href]:not([disabled])',
	'a[tel]:not([disabled])',
	'a[routerlink]:not([disabled])',
	'area[href]',
	'button:not([disabled])',
	'input[type="date"]:not([disabled])',
	'input[type="email"]:not([disabled])',
	'input[type="number"]:not([disabled])',
	'input[type="password"]:not([disabled])',
	'input[type="phone"]:not([disabled])',
	'input[type="text"]:not([disabled])',
	'input[type="time"]:not([disabled])',
	'input[type="radio"]:not([disabled]):checked',
	'input[type="checkbox"]:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[tabindex="0"]',
	'[contenteditable]',
].toString();

export function focusTrap(event: KeyboardEvent, focusable: ReadonlyArray<HTMLElement>) {
	if (event.shiftKey) {
		if (document.activeElement === focusable[0]) {
			focusable[focusable.length - 1].focus();
			event.preventDefault();
		}
	} else {
		if (document.activeElement === focusable[focusable.length - 1]) {
			focusable[0].focus();
			event.preventDefault();
		}
	}
}
