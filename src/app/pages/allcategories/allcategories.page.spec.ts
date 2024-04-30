import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllcategoriesPage } from './allcategories.page';

describe('AllcategoriesPage', () => {
  let component: AllcategoriesPage;
  let fixture: ComponentFixture<AllcategoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllcategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
