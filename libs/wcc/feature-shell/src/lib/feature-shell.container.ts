import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '@fedex/ui';

@Component({
  templateUrl: './feature-shell.container.html',
  styles: [],
})
export class FeatureShellContainer implements OnInit {
  public navigationItems: Array<NavigationItem> = [
    {
      routerLink: 'dashboard',
      routerLinkActiveExact: false,
      label: 'Dashboard',
    },
    {
      routerLink: 'routeb',
      routerLinkActiveExact: false,
      label: 'Test Route',
    },
  ];
  /**
   * Search input state
   */
  public isSearching = false;
  /**
   * Navbar menu (on mobile) state
   */
  public mobileMenuToggle = false;
  /**
   * Profile dropdown menu state
   */
  public isDropdownOpen = false;

  constructor() {}

  ngOnInit(): void {}

  onSearch(text: string) {
    console.log(text);
    throw new Error('Method not yet implemented!');
  }
}
