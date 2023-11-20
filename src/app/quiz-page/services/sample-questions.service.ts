import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleQuestionsService {

  constructor(private http: HttpClient) {}

  getSampleuestions(framework: string = 'angular') {
    framework = 'assets/questions/' + framework + '.json';
    return this.http.get<any>(framework);
  }
}
