import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntPage } from './ant.page';

describe('AntPage', () => {
  let component: AntPage;
  let fixture: ComponentFixture<AntPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
