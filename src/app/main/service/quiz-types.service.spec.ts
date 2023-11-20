import { TestBed } from '@angular/core/testing';

import { QuizTypesService } from './quiz-types.service';

describe('QuizTypesService', () => {
  let service: QuizTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
