import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferzonePage } from './offerzone.page';

describe('OfferzonePage', () => {
  let component: OfferzonePage;
  let fixture: ComponentFixture<OfferzonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfferzonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
