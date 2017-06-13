import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwoBComponent } from './chapter-two-b.component';

describe('ChapterTwoBComponent', () => {
  let component: ChapterTwoBComponent;
  let fixture: ComponentFixture<ChapterTwoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTwoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTwoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
