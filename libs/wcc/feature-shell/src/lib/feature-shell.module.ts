import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedDesignSystemUiModule } from '@fedex/ui';
import { IsAuthenticatedGuard } from '@fedex/shared-iam-util';
import { FeatureShellContainer } from './feature-shell.container';

@NgModule({
  declarations: [FeatureShellContainer],
  imports: [
    CommonModule,
    SharedDesignSystemUiModule,
    RouterModule.forChild([
      {
        path: '',
        canActivateChild: [IsAuthenticatedGuard],
        component: FeatureShellContainer,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('@fedex/shared-dashboard-feature-dashboard').then(
                (m) => m.SharedFeatureDashboardModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class FeatureShellModule {}
