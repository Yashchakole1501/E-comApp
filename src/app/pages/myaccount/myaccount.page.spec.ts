import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyaccountPage } from './myaccount.page';

describe('MyaccountPage', () => {
  let component: MyaccountPage;
  let fixture: ComponentFixture<MyaccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
