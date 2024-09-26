import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbeComponent } from './testbe.component';

describe('TestbeComponent', () => {
  let component: TestbeComponent;
  let fixture: ComponentFixture<TestbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestbeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
