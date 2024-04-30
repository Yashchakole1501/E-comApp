import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthcarePage } from './healthcare.page';

describe('HealthcarePage', () => {
  let component: HealthcarePage;
  let fixture: ComponentFixture<HealthcarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HealthcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
