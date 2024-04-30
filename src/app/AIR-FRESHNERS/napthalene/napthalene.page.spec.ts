import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NapthalenePage } from './napthalene.page';

describe('NapthalenePage', () => {
  let component: NapthalenePage;
  let fixture: ComponentFixture<NapthalenePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NapthalenePage]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapthalenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
