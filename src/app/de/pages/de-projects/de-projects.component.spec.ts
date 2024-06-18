import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { beforeEach, describe, it } from 'node:test';

import { DeProjectsComponent } from './de-projects.component';

describe('DeProjectsComponent', () => {
  let component: DeProjectsComponent;
  let fixture: ComponentFixture<DeProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
