import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeContactComponent } from './de-contact.component';

describe('DeContactComponent', () => {
  let component: DeContactComponent;
  let fixture: ComponentFixture<DeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
