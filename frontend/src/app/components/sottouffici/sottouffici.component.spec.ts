import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottoufficiComponent } from './sottouffici.component';

describe('SottoufficiComponent', () => {
  let component: SottoufficiComponent;
  let fixture: ComponentFixture<SottoufficiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SottoufficiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SottoufficiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
