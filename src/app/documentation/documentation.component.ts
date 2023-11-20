import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'quiz-documentation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent {
  langId: string = '';
  langId$ = this.router.paramMap.pipe(map((params) => params.get('id')));

  ngOnInit(): void {
    console.log('langId');
  }

  constructor(private router: ActivatedRoute) {}
}
