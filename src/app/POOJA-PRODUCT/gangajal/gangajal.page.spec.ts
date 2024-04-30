import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GangajalPage } from './gangajal.page';

describe('GangajalPage', () => {
  let component: GangajalPage;
  let fixture: ComponentFixture<GangajalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GangajalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
