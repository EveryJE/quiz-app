import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import {Input} from '@angular/core'
import { quizType } from 'src/app/main/mainInterface';

@Component({
  selector: 'quiz-quiz-type-tag',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './quiz-type-tag.component.html',
  styleUrls: ['./quiz-type-tag.component.scss'],
})
export class QuizTypeTagComponent {
  @Input() tagData: quizType = {
    title:'card title',
    img_url:'',
    description:'description can be be',
    quiz:'provide quiz link',
    documentation:'provide documentation link',
  };
}
