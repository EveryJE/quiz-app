import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { QuizPageComponent } from '../quiz-page/quiz-page.component';
import { ContainerComponent } from '../container/container.component';
import { QuizTypeTagComponent } from '../components/quiz-type-tag/quiz-type-tag.component';
import { quizType } from './mainInterface';
import { QuizTypesService } from './service/quiz-types.service';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'quiz-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    CommonModule,
    LoginComponent,
    QuizTypeTagComponent,
    RouterModule,
    HomeComponent,
  ],
})
export class MainComponent {

}
