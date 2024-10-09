import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfficioComponent } from './ufficio.component';

describe('UfficioComponent', () => {
  let component: UfficioComponent;
  let fixture: ComponentFixture<UfficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfficioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
