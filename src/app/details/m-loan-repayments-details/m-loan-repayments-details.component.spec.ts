import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanRepaymentsDetailsComponent } from './m-loan-repayments-details.component';

describe('MLoanRepaymentsDetailsComponent', () => {
  let component: MLoanRepaymentsDetailsComponent;
  let fixture: ComponentFixture<MLoanRepaymentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanRepaymentsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanRepaymentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
