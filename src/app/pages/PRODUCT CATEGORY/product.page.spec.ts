import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRODUCTPage } from './product.page';

describe('PRODUCTPage', () => {
  let component: PRODUCTPage;
  let fixture: ComponentFixture<PRODUCTPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PRODUCTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
