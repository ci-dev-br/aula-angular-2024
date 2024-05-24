import { TestBed } from '@angular/core/testing';

import { NgxLibmService } from './ngx-libm.service';

describe('NgxLibmService', () => {
  let service: NgxLibmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLibmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
