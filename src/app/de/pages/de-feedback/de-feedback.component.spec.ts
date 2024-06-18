import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { beforeEach, describe, it } from 'node:test';
import { DeFeedbackComponent } from './de-feedback.component';


describe('DeFeedbackComponent', () => {
  let component: DeFeedbackComponent;
  let fixture: ComponentFixture<DeFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});