import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwoAComponent } from './chapter-two-a.component';

describe('ChapterTwoAComponent', () => {
  let component: ChapterTwoAComponent;
  let fixture: ComponentFixture<ChapterTwoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTwoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTwoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
