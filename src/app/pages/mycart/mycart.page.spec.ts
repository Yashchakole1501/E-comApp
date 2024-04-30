import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MycartPage } from './mycart.page';

describe('MycartPage', () => {
  let component: MycartPage;
  let fixture: ComponentFixture<MycartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MycartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
