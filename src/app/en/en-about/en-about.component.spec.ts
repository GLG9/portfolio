import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAboutComponent } from './en-about.component';

describe('EnAboutComponent', () => {
  let component: EnAboutComponent;
  let fixture: ComponentFixture<EnAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
