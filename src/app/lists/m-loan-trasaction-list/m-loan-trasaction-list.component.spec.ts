import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanTrasactionListComponent } from './m-loan-trasaction-list.component';

describe('MLoanTrasactionListComponent', () => {
  let component: MLoanTrasactionListComponent;
  let fixture: ComponentFixture<MLoanTrasactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanTrasactionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanTrasactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
