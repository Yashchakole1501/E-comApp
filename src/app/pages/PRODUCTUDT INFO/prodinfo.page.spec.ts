import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdinfoPage } from './prodinfo.page';

describe('ProdinfoPage', () => {
  let component: ProdinfoPage;
  let fixture: ComponentFixture<ProdinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
