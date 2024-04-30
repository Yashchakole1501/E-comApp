import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyordersPage } from './myorders.page';

describe('MyordersPage', () => {
  let component: MyordersPage;
  let fixture: ComponentFixture<MyordersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
