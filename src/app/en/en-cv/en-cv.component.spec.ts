import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCvComponent } from './en-cv.component';

describe('EnCvComponent', () => {
  let component: EnCvComponent;
  let fixture: ComponentFixture<EnCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
