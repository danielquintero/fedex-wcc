import { Injectable } from '@angular/core';
import { CanActivateChild, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IamFacade } from '@fedex/shared-iam-data-access';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivateChild {
  private readonly userProfile$ = this.iam.userProfile$;
  constructor(
    private readonly router: Router,
    private readonly iam: IamFacade
  ) {}
  canActivateChild():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userProfile$.pipe(
      switchMap((userProfile) => {
        return !userProfile
          ? this.router.navigate(['iam/signin']) && of(false)
          : of(true);
      })
    );
  }
}
