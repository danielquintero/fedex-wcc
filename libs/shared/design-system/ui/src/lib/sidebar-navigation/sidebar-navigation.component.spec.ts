/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavigationComponent } from './sidebar-navigation.component';

describe('SidebarNavigationComponent', () => {
  let component: SidebarNavigationComponent;
  let fixture: ComponentFixture<SidebarNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
import { RouterTestingModule } from '@angular/router/testing';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SidebarNavigationComponent } from './sidebar-navigation.component';

describe('SidebarNavigationComponent', () => {
  let spectator: SpectatorRouting<SidebarNavigationComponent>;
  const createComponent = createRoutingFactory({
    component: SidebarNavigationComponent,
    imports: [RouterTestingModule],
    data: {},
    params: {},
    queryParams: {},
    mockRouterLinks: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should ', () => {
    expect(spectator.component).toBeTruthy();
  });

  /*   it('should navigate away using router link', async () => {
    const spectator = createComponent();

    // wait for promises to resolve...
    await spectator.fixture.whenStable();

    // test the current route by asserting the location
    expect(spectator.inject(Location).path()).toBe('/');

    // click on a router link
    spectator.click('.link-1');

    // don't forget to wait for promises to resolve...
    await spectator.fixture.whenStable();

    // test the new route by asserting the location
    expect(spectator.inject(Location).path()).toBe('/foo');
  }); */
});
