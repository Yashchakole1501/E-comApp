import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TissuePage } from './tissue.page';

describe('TissuePage', () => {
  let component: TissuePage;
  let fixture: ComponentFixture<TissuePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TissuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
