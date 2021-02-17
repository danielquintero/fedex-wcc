import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';

interface AxisInterface {
	x: boolean;
	y: boolean;
}

interface DimensionsInterface {
	parent: ClientRect;
	child: ClientRect;
}

const enum Position {
	Top = 'position-top',
	Bottom = 'position-bottom',
	Left = 'position-left',
	Right = 'position-right',
	Fallback = 'position-fallback',
}

@Injectable({
	providedIn: 'root',
})
export class CollisionDetectionService {
	private dimensions!: DimensionsInterface;

	constructor(@Inject(WINDOW) readonly windowRef: Window) {}

	detect(
		parent: HTMLElement,
		child: HTMLElement,
		axis: AxisInterface = { x: true, y: true },
	): void {
		let check = false;
		let align = '';

		/* eslint-disable  */
		parent.classList.remove(
			Position.Top,
			Position.Bottom,
			Position.Left,
			Position.Right,
			Position.Fallback,
		);
		child.style.transform = '';
		this.dimensions = {
			parent: parent.getBoundingClientRect(),
			child: child.getBoundingClientRect(),
		};
		/* eslint-enable  */

		if (
			this.dimensions.parent.top - this.dimensions.child.height > 0 &&
			this.dimensions.parent.left - this.dimensions.child.width / 2 > 0 &&
			axis.y === true
		) {
			check = true;
			align = Position.Top;
		}

		if (
			this.dimensions.parent.bottom + this.dimensions.child.height <
				this.windowRef.innerHeight - this.windowRef.scrollY &&
			this.dimensions.parent.left - this.dimensions.child.width / 2 > 0 &&
			axis.y === true
		) {
			check = true;
			align = Position.Bottom;
		}

		if (this.dimensions.parent.left - this.dimensions.child.width > 0 && axis.x === true) {
			check = true;
			align = Position.Left;
		}

		// default
		if (
			this.dimensions.parent.right + (this.dimensions.child.right - this.dimensions.child.left) <
				this.windowRef.innerWidth &&
			axis.x === true
		) {
			check = true;
			align = Position.Right;
		}

		// fallback
		if (check === false) {
			// eslint-disable-next-line
			child.style.transform = `translate(-${
				(this.dimensions.parent.left / this.windowRef.innerWidth) * 100
			}%, 0)`;
			align = Position.Fallback;
		}

		parent.classList.add(align);
	}
}
