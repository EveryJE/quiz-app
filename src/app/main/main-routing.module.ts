import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: ':id', component: HomeComponent },
      
      {
        path: 'quiz-page',
        loadComponent: () =>
          import('../quiz-page/quiz-page.component').then(
            (m) => m.QuizPageComponent
          ),
      },
      {
        path: 'quiz-page/:id',
        loadComponent: () =>
          import('../quiz-page/quiz-page.component').then(
            (m) => m.QuizPageComponent
          ),
      },
      {
        path: 'documentation',
        loadComponent: () =>
          import('../documentation/documentation.component').then(
            (m) => m.DocumentationComponent
          ),
      },
      {
        path: 'documentation/:id',
        loadComponent: () =>
          import('../documentation/documentation.component').then(
            (m) => m.DocumentationComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
