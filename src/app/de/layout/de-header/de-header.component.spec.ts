import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { beforeEach, describe, it } from 'node:test';
import { DeHeaderComponent } from './de-header.component';

describe('DeHeaderComponent', () => {
  let component: DeHeaderComponent;
  let fixture: ComponentFixture<DeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
