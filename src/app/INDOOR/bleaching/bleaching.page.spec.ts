import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BleachingPage } from './bleaching.page';

describe('BleachingPage', () => {
  let component: BleachingPage;
  let fixture: ComponentFixture<BleachingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BleachingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
