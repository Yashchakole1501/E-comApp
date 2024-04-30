import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JasminePage } from './jasmine.page';

describe('JasminePage', () => {
  let component: JasminePage;
  let fixture: ComponentFixture<JasminePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JasminePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
