import { TestBed } from '@angular/core/testing';

import { MLoanRepaymentScheduleService } from './mloan-repayment-schedule.service';

describe('MLoanRepaymentScheduleService', () => {
  let service: MLoanRepaymentScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MLoanRepaymentScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
