import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanDeatailComponent } from './m-loan-deatail.component';

describe('MLoanDeatailComponent', () => {
  let component: MLoanDeatailComponent;
  let fixture: ComponentFixture<MLoanDeatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanDeatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
