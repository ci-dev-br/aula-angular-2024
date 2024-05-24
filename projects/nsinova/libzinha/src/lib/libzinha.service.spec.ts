import { TestBed } from '@angular/core/testing';

import { LibzinhaService } from './libzinha.service';

describe('LibzinhaService', () => {
  let service: LibzinhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibzinhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
