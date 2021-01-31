import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromIam from './+state/iam.reducer';
import { IamEffects } from './+state/iam.effects';
import { IamFacade } from './+state/iam.facade';
import { NxModule } from '@nrwl/angular';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    EffectsModule.forRoot([IamEffects]),
    StoreModule.forFeature(fromIam.IAM_FEATURE_KEY, fromIam.reducer),
  ],
  providers: [IamFacade],
})
export class SharedIamDataAccessModule {}
