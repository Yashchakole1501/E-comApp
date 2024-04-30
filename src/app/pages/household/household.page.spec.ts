import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdPage } from './household.page';

describe('HouseholdPage', () => {
  let component: HouseholdPage;
  let fixture: ComponentFixture<HouseholdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HouseholdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
