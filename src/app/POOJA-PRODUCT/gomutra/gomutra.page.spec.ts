import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GomutraPage } from './gomutra.page';

describe('GomutraPage', () => {
  let component: GomutraPage;
  let fixture: ComponentFixture<GomutraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GomutraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
