import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingLeditComponent } from './shopping-ledit.component';

describe('ShoppingLeditComponent', () => {
  let component: ShoppingLeditComponent;
  let fixture: ComponentFixture<ShoppingLeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingLeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingLeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
