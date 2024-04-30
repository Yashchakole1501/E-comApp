import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoojaPage } from './pooja.page';

describe('PoojaPage', () => {
  let component: PoojaPage;
  let fixture: ComponentFixture<PoojaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
