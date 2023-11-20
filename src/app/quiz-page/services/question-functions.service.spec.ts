import { TestBed } from '@angular/core/testing';

import { QuestionFunctionsService } from './question-functions.service';

describe('QuestionFunctionsService', () => {
  let service: QuestionFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
