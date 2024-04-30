import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirFreshnersPage } from './air-freshners.page';

describe('AirFreshnersPage', () => {
  let component: AirFreshnersPage;
  let fixture: ComponentFixture<AirFreshnersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AirFreshnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
