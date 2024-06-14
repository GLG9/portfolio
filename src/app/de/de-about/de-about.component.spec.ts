import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeAboutComponent } from './de-about.component';

describe('DeAboutComponent', () => {
  let component: DeAboutComponent;
  let fixture: ComponentFixture<DeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
