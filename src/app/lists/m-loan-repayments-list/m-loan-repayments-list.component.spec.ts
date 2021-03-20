import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanRepaymentsListComponent } from './m-loan-repayments-list.component';

describe('MLoanRepaymentsListComponent', () => {
  let component: MLoanRepaymentsListComponent;
  let fixture: ComponentFixture<MLoanRepaymentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanRepaymentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanRepaymentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
