import { TestBed } from '@angular/core/testing';

import { BancoDemoApiService } from './banco-demo-api.service';

describe('BancoDemoApiService', () => {
  let service: BancoDemoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoDemoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
