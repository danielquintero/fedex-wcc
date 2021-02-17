export interface ItemModel {
	id: string;
	title: string;
	description: string;
	secondaryDescription?: string;
	showButton: boolean;
	button?: {
		action: string;
		icon: string;
	};
}
