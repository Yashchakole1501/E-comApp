import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashingPage } from './washing.page';

describe('WashingPage', () => {
  let component: WashingPage;
  let fixture: ComponentFixture<WashingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
