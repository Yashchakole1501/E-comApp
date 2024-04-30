import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishwashingPage } from './dishwashing.page';

describe('DishwashingPage', () => {
  let component: DishwashingPage;
  let fixture: ComponentFixture<DishwashingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DishwashingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
