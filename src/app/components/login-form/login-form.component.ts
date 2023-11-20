import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatSlideToggleModule,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { loginDetails } from './componentInterface';
import { DetailsService } from 'src/app/app-service/details.service';

@Component({
  selector: 'quiz-login-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgIf,
    MatDividerModule,
    MatSlideToggleModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  name_value!: string;
  course_value!: string;
  remember_me!: boolean;

  userDetails: loginDetails = {
    name: this.name_value,
    course: this.course_value,
    remember_me: this.remember_me,
  };

  constructor(private route: Router, private detailService: DetailsService) {}

  // onLogin() {
  //   this.name_value = this.userDetails.name;
  //   this.course_value = this.userDetails.course;
  //   this.remember_me = this.userDetails.remember_me;

  //   if (this.remember_me) {
  //     console.log('this is admin');

  //     if (
  //       this.course_value === '1234' &&
  //       this.name_value === 'admin@kgyan.com'
  //     ) {
  //       this.route.navigate(['/main']);
  //       console.log('login successfully');
  //     }
  //   }

  //   console.log('log in called', this.remember-me);
  // }

  onRememberMe(event: MatSlideToggleChange) {
    this.userDetails.remember_me = event.checked;
    console.log('rememberme',this.userDetails.remember_me)
  }

  onLogin() {
    this.detailService.setUserName(this.userDetails.name);

    if (this.userDetails.remember_me) {
      localStorage.setItem('quiz-user-name', this.userDetails.name);
      localStorage.setItem('course', this.course_value);
      console.log('saved to local storage ');
    }
    

    this.route.navigate(['/main','javascript']);
  }
}
