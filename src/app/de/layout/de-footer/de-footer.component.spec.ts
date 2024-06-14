import { ComponentFixture, TestBed } from '@angular/core/testing';

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
