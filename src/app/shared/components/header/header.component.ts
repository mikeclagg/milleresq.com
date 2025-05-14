import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  
  navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/practice-areas', label: 'Practice Areas', exact: false },
    { path: '/testimonials', label: 'Testimonials', exact: false },
    { path: '/faq', label: 'FAQ', exact: false },
    { path: '/resources', label: 'Resources', exact: false },
    { path: '/blog', label: 'Blog', exact: false },
    { path: '/contact', label: 'Contact', exact: false }
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  isActive(path: string, exact: boolean): boolean {
    if (exact) {
      return this.router.url === path;
    }
    return this.router.url.startsWith(path);
  }
}
