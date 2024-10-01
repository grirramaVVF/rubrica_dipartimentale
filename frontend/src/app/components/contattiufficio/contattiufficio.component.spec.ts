import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiufficioComponent } from './contattiufficio.component';

describe('ContattiufficioComponent', () => {
  let component: ContattiufficioComponent;
  let fixture: ComponentFixture<ContattiufficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContattiufficioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContattiufficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
