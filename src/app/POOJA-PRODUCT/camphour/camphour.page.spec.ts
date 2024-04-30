import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamphourPage } from './camphour.page';

describe('CamphourPage', () => {
  let component: CamphourPage;
  let fixture: ComponentFixture<CamphourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamphourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
