import { TestBed } from '@angular/core/testing';

import { MLoanService } from './m-loan.service';

describe('MLoanService', () => {
  let service: MLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
