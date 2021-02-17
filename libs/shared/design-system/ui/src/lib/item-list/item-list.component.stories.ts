import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storybookCodeExample } from '../../styleguide/storybook.code-example';
import { storybookHeader } from '../../styleguide/storybook.header';
import { UiComponentsModule } from '../components.module';
import { ItemListComponent } from './item-list.component';
import { ItemModel } from './models/item-model';

const description = `Log in date: ${new Date().toLocaleDateString('en-US')}`;

const itemData: Array<ItemModel> = [
  {
    id: '1',
    title: 'Chrome on Mac OS',
    description,
    secondaryDescription: 'IP Address: 0.0.0.0',
    showButton: true,
    button: {
      icon: 'delete_forever',
      action: '',
    },
  },
  {
    id: '2',
    title: 'Chrome on Linux',
    description,
    showButton: true,
    button: {
      icon: 'delete_forever',
      action: '',
    },
  },
  {
    id: '3',
    title: 'Chrome on Windows',
    description,
    showButton: false,
    secondaryDescription: 'IP Address: 0.0.0.0',
  },
  {
    id: '4',
    title: 'Chrome on Windows',
    description,
    showButton: false,
  },
];

const actionData = {
  onDelete: action('onDelete'),
};

export default {
  title: 'Item List',
};

const arrayOfObjects = [
  {
    label: 'One item list',
    items: itemData.slice(0, 1),
  },
  {
    label: 'Multiple items list',
    items: [...itemData.slice(0, 1), ...itemData.slice(0, 1)],
  },
  {
    label: 'Item with no button',
    items: itemData.slice(2, 4),
  },
  {
    label: 'Different items list',
    items: itemData.slice(0, 4),
  },
];

const template = `
	<fedex-item-list [items]="items" [showDivider]="showDivider"></fedex-item-list>
`;

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const story = (
  showDivider: boolean | undefined,
  items: Array<ItemModel>
): object => ({
  moduleMetadata: {
    imports: [UiComponentsModule],
  },
  component: ItemListComponent,
  template: `
		${storybookHeader('Item list')}
		${template}
		${storybookCodeExample(template)}
	`,
  props: {
    showDivider:
      showDivider !== undefined
        ? boolean('showDivider', showDivider)
        : undefined,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    items: select('items', arrayOfObjects as Array<any>, arrayOfObjects[1])
      .items,
    buttonEmitter: actionData.onDelete,
  },
});

export const itemListWithButton = () => ({ ...story(true, itemData) });

export const itemListNoDivider = () => ({ ...story(false, itemData) });
