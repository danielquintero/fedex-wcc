import { RouterTestingModule } from '@angular/router/testing';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'NavbarComponent',
  excludeStories: /.*(Data)$/,
};

export const actionsData = {
  search: action('search'),
};

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule],
  },
  component: NavbarComponent,
  props: {
    navigation: text('navigation', ''),
    search: actionsData.search,
  },
});
