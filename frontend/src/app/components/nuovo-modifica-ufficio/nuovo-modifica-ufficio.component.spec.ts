import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoModificaUfficioComponent } from './nuovo-modifica-ufficio.component';

describe('NuovoModificaUfficioComponent', () => {
  let component: NuovoModificaUfficioComponent;
  let fixture: ComponentFixture<NuovoModificaUfficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuovoModificaUfficioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoModificaUfficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
