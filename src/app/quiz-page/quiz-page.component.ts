import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleQuestionsService } from './services/sample-questions.service';
import { interval } from 'rxjs';
import { questionProgress, questionStatus } from './services/interface';
import { QuestionFunctionsService } from './services/question-functions.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DetailsService } from '../app-service/details.service';

@Component({
  selector: 'quiz-quiz-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  constructor(
    private question: SampleQuestionsService,
    private extraFunctions: QuestionFunctionsService,
    private router: ActivatedRoute,
    private userDetails:DetailsService
  ) {}

  quizId: string = this.router.snapshot.params['id'];
  quizLogo: string = 'assets/frameworkImg/' + this.quizId + '.png';

  ngOnInit(): void {
    this.userName = this.userDetails.getUserName()!;
    this.getAllQuestions();
    this.startCounter();
  }

  userName: string = '';
  questions: any = [];
  currentQuestionNumber: number = 1;
  totalQuestions: number = 0;
  points: number = 0;
  timeLeft: number = 0;
  showTimeLeft: string = '';
  interval: any;
  ansProgress: Array<questionProgress> = [];
  qtnStatus: Array<questionStatus> = [];
  quizSubmited: boolean = false;


  getAllQuestions() {
    this.question.getSampleuestions(this.quizId).subscribe((res) => {
      this.qtnStatus = [];
      this.ansProgress = [];

      this.questions = res;
      this.totalQuestions = this.questions.length;

      for (let x = 1; x <= this.totalQuestions; x++) {
        this.qtnStatus.push({ questionNumber: x, tackled: false });
      }
      console.log(this.qtnStatus);
    });
  }

  displayTime = this.extraFunctions.displayTime;

  startCounter() {
    this.timeLeft = 600;
    this.interval = interval(1000).subscribe((val) => {
      this.timeLeft--;
      this.showTimeLeft = this.displayTime(this.timeLeft);
    });
  }

  nextQuestion() {
    this.currentQuestionNumber < this.totalQuestions &&
      this.currentQuestionNumber++;
    console.log(this.ansProgress);
    console.log(
      'this.currentQuestionNumber: ',
      this.currentQuestionNumber,
      'this.totalQuestions: ',
      this.totalQuestions
    );
  }
  finishQuiz() {
    this.quizSubmited = true;
    console.log('quiz hidden ', this.quizSubmited);
  }

  prevQuestion() {
    this.currentQuestionNumber > 1 && this.currentQuestionNumber--;
    console.log(this.ansProgress);
  }
  refQuestion() {
    const userConfirmed = confirm('Do you still want to refresh quiz? .this will clear all your quiz progress');

    if (userConfirmed) {
      this.currentQuestionNumber = 1;
      this.timeLeft = 600;
      this.points = 0;
      this.getAllQuestions();
    }
  }

  jumpToQuestion(qtnNumber: number) {
    this.currentQuestionNumber = qtnNumber;
  }

  checkAnswer(answer: any, question: any) {
    // console.log('ans',answer," ",'optionKey',question.answer);
    const alreadyTackled = this.ansProgress.find(
      (ap) => ap.questionNumber === question.number
    );
    const answered = this.qtnStatus.find(
      (ap) => ap.questionNumber == question.number
    );

    if (answer === question.answer) {
      if (alreadyTackled) {
        alreadyTackled.points = 1;
      } else {
        this.ansProgress.push({
          questionNumber: question.number,
          points: 1,
        });
      }
    } else {
      if (alreadyTackled) {
        alreadyTackled.points = 0;
      } else {
        this.ansProgress.push({
          questionNumber: question.number,
          points: 0,
        });
      }
    }
    if (answered) {
      answered.tackled = true;
    }
    // console.log('question Status  ', this.qtnStatus);
    this.points = this.ansProgress.reduce((acc, p) => acc + p.points, 0);
  }
}
