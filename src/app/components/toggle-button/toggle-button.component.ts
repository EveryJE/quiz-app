import { Component,signal,HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'quiz-toggle-button',
  standalone: true,
  template: `
    <label class="toggle-container">
      <span class="toggle-rail" (click)="toggleTheme()">
        <span class="toggle-head" [@themeMode]="themeMode">
          <mat-icon>{{
            themeMode === 'light'
              ? 'sunny'
              : themeMode === 'dark'
              ? 'nightlight'
              : themeMode === 'custom'
              ? 'contrast'
              : ''
          }}</mat-icon>
        </span>
      </span>
    </label>
  `,
  imports: [CommonModule, MatIconModule],
  styleUrls: ['./toggle-button.component.scss'],
  animations: [
    trigger('themeMode', [
      state(
        'light',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'dark',
        style({
          transform: 'translateX(1rem)', // Adjust this value as needed
        })
      ),
      state(
        'custom',
        style({
          transform: 'translateX(2rem)', // Adjust this value as needed
        })
      ),
      transition('* => *', animate('0.3s ease-in-out')), // Adjust the animation duration
    ]),
  ],
})
export class ToggleButtonComponent {
  themeMode: string = this.themeService.getCurrentTheme();

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  this.themeMode= this.themeService.getCurrentTheme();
  }

}
