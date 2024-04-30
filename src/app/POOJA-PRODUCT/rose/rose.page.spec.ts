import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RosePage } from './rose.page';

describe('RosePage', () => {
  let component: RosePage;
  let fixture: ComponentFixture<RosePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
