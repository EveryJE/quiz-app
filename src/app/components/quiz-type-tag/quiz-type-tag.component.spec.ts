import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTypeTagComponent } from './quiz-type-tag.component';

describe('QuizTypeTagComponent', () => {
  let component: QuizTypeTagComponent;
  let fixture: ComponentFixture<QuizTypeTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizTypeTagComponent]
    });
    fixture = TestBed.createComponent(QuizTypeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
