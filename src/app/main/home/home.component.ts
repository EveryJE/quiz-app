import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizTypeTagComponent } from 'src/app/components/quiz-type-tag/quiz-type-tag.component';
import { QuizTypesService } from '../service/quiz-types.service';
import { quizType } from '../mainInterface';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs'

@Component({
  selector: 'quiz-home',
  standalone: true,
  imports: [CommonModule, QuizTypeTagComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tagDataArray: quizType[] = [];

  constructor(
    private quizTypeService: QuizTypesService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe((params) => {
      const langType = params.get('id');
      if (langType) {
        this.tagDataArray = this.quizTypeService.getLanguageType(langType);
      }
    });
  }
}
