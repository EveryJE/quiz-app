import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'quiz-login',
  standalone: true,
  imports: [CommonModule,LoginFormComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

}
