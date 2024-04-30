import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashingLiquidsPage } from './washing-liquids.page';

describe('WashingLiquidsPage', () => {
  let component: WashingLiquidsPage;
  let fixture: ComponentFixture<WashingLiquidsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashingLiquidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
