import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoundryPage } from './loundry.page';

describe('LoundryPage', () => {
  let component: LoundryPage;
  let fixture: ComponentFixture<LoundryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoundryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
