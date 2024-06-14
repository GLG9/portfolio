import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnProjectsComponent } from './en-projects.component';

describe('EnProjectsComponent', () => {
  let component: EnProjectsComponent;
  let fixture: ComponentFixture<EnProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
