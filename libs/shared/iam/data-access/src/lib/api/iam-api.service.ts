import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAM } from '../+state/iam.models';

@Injectable({
  providedIn: 'root',
})
export class IamApiService {
  constructor(private readonly http: HttpClient) {}

  signup(body: IAM.UserSignUp): Observable<void> {
    return this.http.post<void>('https://demo-api.now.sh/users', body, {});
  }

  signin(body: IAM.UserSignIn): Observable<{ user: IAM.UserProfile }> {
    return this.http.post<{ user: IAM.UserProfile }>('/api/signin', body, {});
  }
}
