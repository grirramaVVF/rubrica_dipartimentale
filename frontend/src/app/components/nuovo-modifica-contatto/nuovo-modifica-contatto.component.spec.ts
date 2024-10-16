import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoModificaContattoComponent } from './nuovo-modifica-contatto.component';

describe('NuovoModificaContattoComponent', () => {
  let component: NuovoModificaContattoComponent;
  let fixture: ComponentFixture<NuovoModificaContattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuovoModificaContattoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoModificaContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
