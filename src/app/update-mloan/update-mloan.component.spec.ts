import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMLoanComponent } from './update-mloan.component';

describe('UpdateMLoanComponent', () => {
  let component: UpdateMLoanComponent;
  let fixture: ComponentFixture<UpdateMLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
