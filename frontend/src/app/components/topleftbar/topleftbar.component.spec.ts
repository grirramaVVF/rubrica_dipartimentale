import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplrftbarComponent } from './topleftbar.component';

describe('ToplrftbarComponent', () => {
  let component: ToplrftbarComponent;
  let fixture: ComponentFixture<ToplrftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToplrftbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToplrftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
