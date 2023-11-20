import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionFunctionsService {
  constructor() {}

  displayTime(time: number): string {
    let min, sec, hr;
    min = Math.floor(time / 60) % 60;
    sec = time % 60;
    hr = Math.floor(time / 3600) % 12;
    return `${hr}:${min}:${sec}`;
  }
  

}
