import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnFooterComponent } from './en-footer.component';

describe('EnFooterComponent', () => {
  let component: EnFooterComponent;
  let fixture: ComponentFixture<EnFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
