import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetergentPage } from './detergent.page';

describe('DetergentPage', () => {
  let component: DetergentPage;
  let fixture: ComponentFixture<DetergentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetergentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
