import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnHeaderComponent } from './en-header.component';

describe('EnHeaderComponent', () => {
  let component: EnHeaderComponent;
  let fixture: ComponentFixture<EnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
