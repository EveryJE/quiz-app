import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  userName: any = localStorage.getItem('quiz-user-name')? localStorage.getItem('quiz-user-name') :'Mr/Mrs 👼🏾';

  setUserName(userName: string) {
    this.userName = userName;
  }
  getUserName() {
    return this.userName;
  }
  constructor() {}
}
