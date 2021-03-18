import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanTrasactionDetailsComponent } from './m-loan-trasaction-details.component';

describe('MLoanTrasactionDetailsComponent', () => {
  let component: MLoanTrasactionDetailsComponent;
  let fixture: ComponentFixture<MLoanTrasactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanTrasactionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanTrasactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
