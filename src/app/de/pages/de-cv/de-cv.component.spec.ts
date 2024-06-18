import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { beforeEach, describe, it } from 'node:test';

import { DeCvComponent } from './de-cv.component';

describe('DeCvComponent', () => {
  let component: DeCvComponent;
  let fixture: ComponentFixture<DeCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
