import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndoorPage } from './indoor.page';

describe('IndoorPage', () => {
  let component: IndoorPage;
  let fixture: ComponentFixture<IndoorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
