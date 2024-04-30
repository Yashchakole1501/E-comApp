import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DishwashBarPage } from './dishwash-bar.page';

describe('DishwashBarPage', () => {
  let component: DishwashBarPage;
  let fixture: ComponentFixture<DishwashBarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DishwashBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
