import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fedex-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.css'],
})
export class DashboardContainer implements OnInit {
  public pinnedProjectOptionsToggle = false;
  public dropdownPanelToggle = false;
  constructor() {}

  ngOnInit(): void {}
}
