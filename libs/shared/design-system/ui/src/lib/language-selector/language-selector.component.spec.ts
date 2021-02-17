import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { I18nService } from '@fedex/shared/core';
import { MATERIAL_MODULES } from '../components.module';
import { IconComponent } from '../icon/icon.component';
import { LanguageSelectorComponent as ComponentUnderTest } from './language-selector.component';

describe(ComponentUnderTest.name, () => {
  let spectator: SpectatorRouting<ComponentUnderTest>;

  const createComponent = createRoutingFactory({
    component: ComponentUnderTest,
    declarations: [IconComponent],
    imports: [...MATERIAL_MODULES],
    mocks: [I18nService],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeInstanceOf(ComponentUnderTest);
  });
});
