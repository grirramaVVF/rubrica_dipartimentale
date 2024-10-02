import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SediPerifericheComponent } from './sedi-periferiche.component';

describe('SediPerifericheComponent', () => {
  let component: SediPerifericheComponent;
  let fixture: ComponentFixture<SediPerifericheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SediPerifericheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SediPerifericheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
