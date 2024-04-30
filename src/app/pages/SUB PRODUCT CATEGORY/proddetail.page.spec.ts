import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProddetailPage } from './proddetail.page';

describe('ProddetailPage', () => {
  let component: ProddetailPage;
  let fixture: ComponentFixture<ProddetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProddetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
