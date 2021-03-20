import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanRepaymentCreateComponent } from './m-loan-repayment-create.component';

describe('MLoanRepaymentCreateComponent', () => {
  let component: MLoanRepaymentCreateComponent;
  let fixture: ComponentFixture<MLoanRepaymentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanRepaymentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanRepaymentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
