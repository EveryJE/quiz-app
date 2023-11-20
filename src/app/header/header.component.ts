import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToggleButtonComponent } from '../components/toggle-button/toggle-button.component';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'quiz-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    ToggleButtonComponent,
    MatChipsModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  show: boolean = true;
  showClass: string = 'h-fit';

  showMenu() {
    this.show = !this.show;
    console.log('show menu called', this.show);
    this.showClass = this.show ? 'h-fit' : 'h-0  hidden';
  }
}
