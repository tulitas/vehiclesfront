import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLoanListComponent } from './m-loan-list.component';

describe('MLoanListComponent', () => {
  let component: MLoanListComponent;
  let fixture: ComponentFixture<MLoanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLoanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
