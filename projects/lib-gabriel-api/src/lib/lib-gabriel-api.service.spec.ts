import { TestBed } from '@angular/core/testing';

import { LibGabrielApiService } from './lib-gabriel-api.service';

describe('LibGabrielApiService', () => {
  let service: LibGabrielApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibGabrielApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
