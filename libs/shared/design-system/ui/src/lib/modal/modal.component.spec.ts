import { SpectatorElement } from '@ngneat/spectator';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let spectator: Spectator<ModalComponent>;
  const createComponent = createComponentFactory({
    component: ModalComponent,
    declarations: [IconComponent, ButtonComponent],
    imports: [],
  });

  it('should create the component', () => {
    spectator = createComponent({
      detectChanges: true,
      props: {
        title: 'I am the title',
      },
    });
    expect(spectator.component).toBeInstanceOf(ModalComponent);
    expect(spectator.query('.fedex-modal_header > h5')?.textContent).toEqual(
      'I am the title'
    );
  });
  describe('show() and hide()', () => {
    it('should show and hide the component', () => {
      spectator = createComponent({
        detectChanges: true,
        props: {
          title: 'I am the title',
        },
      });
      const element = spectator.query('div');
      expect(element?.getAttribute('visible')).toEqual('false');
      spectator.component.show();
      expect(element?.getAttribute('visible')).toEqual('true');
      spectator.component.hide();
      expect(element?.getAttribute('visible')).toEqual('false');
    });
  });

  describe('clicking the modal wrapper', () => {
    it('should hide the modal', () => {
      spectator = createComponent({
        detectChanges: true,
        props: {
          title: 'I am the title',
        },
      });
      const element = spectator.query('div');
      spectator.component.show();
      spectator.click(spectator.query('.fedex-modal_wrapper') || undefined);
      expect(element?.getAttribute('visible')).toEqual('false');
    });
  });

  describe('keyboard input', () => {
    it('escape should hide the modal', () => {
      spectator = createComponent({
        detectChanges: true,
        props: {
          title: 'I am the title',
        },
      });
      const element = spectator.query('div');
      spectator.component.show();
      spectator.dispatchKeyboardEvent(
        element as SpectatorElement,
        'keydown',
        'Escape'
      );
      expect(element?.getAttribute('visible')).toEqual('false');
    });
    // TODO: Figure out how to unit test the focus functionality
  });
});
