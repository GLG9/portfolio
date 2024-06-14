import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeHomeComponent } from './de-home.component';

describe('DeHomeComponent', () => {
  let component: DeHomeComponent;
  let fixture: ComponentFixture<DeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
