import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MynotifyPage } from './mynotify.page';

describe('MynotifyPage', () => {
  let component: MynotifyPage;
  let fixture: ComponentFixture<MynotifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MynotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
