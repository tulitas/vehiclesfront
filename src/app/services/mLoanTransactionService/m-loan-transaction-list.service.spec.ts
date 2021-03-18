import { TestBed } from '@angular/core/testing';

import { MLoanTransactionListService } from './m-loan-transaction-list.service';

describe('MLoanTransactionListService', () => {
  let service: MLoanTransactionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MLoanTransactionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
