import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishwashLiquidPage } from './dishwash-liquid.page';

describe('DishwashLiquidPage', () => {
  let component: DishwashLiquidPage;
  let fixture: ComponentFixture<DishwashLiquidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DishwashLiquidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
