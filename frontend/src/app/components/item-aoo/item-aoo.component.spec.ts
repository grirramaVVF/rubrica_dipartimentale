import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAOOComponent } from './item-aoo.component';

describe('ItemAOOComponent', () => {
  let component: ItemAOOComponent;
  let fixture: ComponentFixture<ItemAOOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemAOOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemAOOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
