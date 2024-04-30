import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BagsPage } from './bags.page';

describe('BagsPage', () => {
  let component: BagsPage;
  let fixture: ComponentFixture<BagsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
