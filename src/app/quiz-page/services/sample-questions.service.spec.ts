import { TestBed } from '@angular/core/testing';

import { SampleQuestionsService } from './sample-questions.service';

describe('SampleQuestionsService', () => {
  let service: SampleQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
