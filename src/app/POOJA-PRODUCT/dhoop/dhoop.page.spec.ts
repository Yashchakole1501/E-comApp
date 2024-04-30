import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DhoopPage } from './dhoop.page';

describe('DhoopPage', () => {
  let component: DhoopPage;
  let fixture: ComponentFixture<DhoopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DhoopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
