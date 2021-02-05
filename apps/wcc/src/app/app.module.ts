import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedIamDataAccessModule } from '@fedex/shared-iam-data-access';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedIamDataAccessModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app', pathMatch: 'full' },
        {
          path: 'iam',
          loadChildren: () =>
            import('@fedex/wcc-feature-iam').then(
              (module) => module.WccFeatureSigninModule
            ),
        },
        {
          path: 'app',
          loadChildren: () =>
            import('@fedex/wcc-feature-shell').then(
              (module) => module.FeatureShellModule
            ),
        },
        {
          path: '**',
          redirectTo: '/app',
          pathMatch: 'full',
        },
      ],
      {
        initialNavigation: 'enabled',
        enableTracing: !environment.production,
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always',
        urlUpdateStrategy: 'eager',
        relativeLinkResolution: 'legacy',
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
