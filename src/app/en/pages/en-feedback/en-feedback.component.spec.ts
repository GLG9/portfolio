import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnFeedbackComponent } from './en-feedback.component';

describe('EnFeedbackComponent', () => {
  let component: EnFeedbackComponent;
  let fixture: ComponentFixture<EnFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
