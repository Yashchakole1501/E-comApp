import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaperWrapBagsPage } from './paper-wrap-bags.page';

describe('PaperWrapBagsPage', () => {
  let component: PaperWrapBagsPage;
  let fixture: ComponentFixture<PaperWrapBagsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaperWrapBagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
