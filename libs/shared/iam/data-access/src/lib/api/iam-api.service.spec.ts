import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IamApiService } from './iam-api.service';

describe('IamApiService', () => {
  let service: IamApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(IamApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
