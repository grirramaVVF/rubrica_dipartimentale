import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfficiFormComponent } from './uffici-form.component';

describe('UfficiFormComponent', () => {
  let component: UfficiFormComponent;
  let fixture: ComponentFixture<UfficiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UfficiFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfficiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
