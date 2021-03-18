import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanTrasactionCreateComponent } from './m-loan-trasaction-create.component';

describe('MLoanTrasactionCreateComponent', () => {
  let component: MLoanTrasactionCreateComponent;
  let fixture: ComponentFixture<MLoanTrasactionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanTrasactionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanTrasactionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
