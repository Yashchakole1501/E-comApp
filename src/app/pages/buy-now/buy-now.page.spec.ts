import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyNowPage } from './buy-now.page';

describe('BuyNowPage', () => {
  let component: BuyNowPage;
  let fixture: ComponentFixture<BuyNowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuyNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
