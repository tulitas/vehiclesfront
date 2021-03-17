import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMLoanComponent } from './create-m-loan.component';

describe('CreateMLoanComponent', () => {
  let component: CreateMLoanComponent;
  let fixture: ComponentFixture<CreateMLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
