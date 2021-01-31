import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedDesignSystemUiModule } from '@fedex/ui';
import { DashboardContainer } from './dashboard.container';

@NgModule({
  imports: [
    CommonModule,
    SharedDesignSystemUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DashboardContainer },
    ]),
  ],
  declarations: [DashboardContainer],
})
export class SharedFeatureDashboardModule {}
