import { Injectable } from '@angular/core';
import { Icon } from './icons.model';

@Injectable({
	providedIn: 'root',
})
export class IconsRegistryService {
	private readonly registry: Map<string, string> = new Map();

	registerIcon(icon: Icon) {
		this.registry.set(icon.name, icon.data);
	}

	getIcon(name: string): string {
		const icon = this.registry.get(name);

		if (icon === undefined) {
			throw Error(`Icon ${name} is not defined in the registry`);
		}

		return icon;
	}
}
