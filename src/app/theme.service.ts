import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeMode: string = 'dark';

  toggleTheme() {
    if (this.themeMode === 'light') {
      this.themeMode = 'dark';
    } else if (this.themeMode === 'dark') {
      this.themeMode = 'custom';
    } else {
      this.themeMode = 'light';
    }
        document.documentElement.setAttribute('data-theme', this.themeMode);

  }
  getCurrentTheme() {
    // return this.currentTheme;
    return this.themeMode;
  }
}
