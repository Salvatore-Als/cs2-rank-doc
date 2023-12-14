import { Component } from '@angular/core';
import { faGithub, faDiscord, faPhp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faPuzzlePiece, faRankingStar, faSun, faMoon, faPlug } from '@fortawesome/free-solid-svg-icons';

interface NavigationItem {
  routerLink: string | string[];
  icon?: IconDefinition;
  title: string;
  children?: NavigationItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected faGithub: IconDefinition = faGithub;
  protected faSun: IconDefinition = faSun;
  protected faMoon: IconDefinition = faMoon;

  protected isDarkTheme: boolean = false;
  protected themeIcon: IconDefinition = this.faMoon;

  protected navigationItems: NavigationItem[] = [
    {
      routerLink: '/',
      title: 'CS2 Rank',
      icon: faRankingStar
    },
    {
      routerLink: ['plugin'],
      title: 'Plugin',
      icon: faPuzzlePiece
    },
    {
      routerLink: ['discord'],
      title: 'Discord bot',
      icon: faDiscord
    },
    {
      routerLink: ['web'],
      title: 'Web interface',
      icon: faPhp
    },
    {
      routerLink: ['public-api'],
      title: 'Public API',
      icon: faPlug
    }
  ]

  protected switchTheme(): void {
    if (this.isDarkTheme) {
      this.isDarkTheme = false;
      this.themeIcon = this.faMoon;
      document.documentElement.classList.remove('dark');
    } else {
      this.isDarkTheme = true;
      this.themeIcon = this.faSun;
      document.documentElement.classList.add('dark');
    }
  }
}
