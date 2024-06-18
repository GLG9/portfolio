import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { beforeEach, describe, it } from 'node:test';
import { DeFooterComponent } from './de-footer.component';

describe('DeFooterComponent', () => {
  let component: DeFooterComponent;
  let fixture: ComponentFixture<DeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
