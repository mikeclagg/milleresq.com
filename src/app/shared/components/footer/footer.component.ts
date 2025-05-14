import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    { 
      title: 'Quick Links',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Practice Areas', path: '/practice-areas' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Practice Areas',
      links: [
        { label: 'Divorce', path: '/practice-areas' },
        { label: 'Child Custody', path: '/practice-areas' },
        { label: 'Child Support', path: '/practice-areas' },
        { label: 'Spousal Maintenance', path: '/practice-areas' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQ', path: '/faq' },
        { label: 'Blog', path: '/blog' },
        { label: 'Resources', path: '/resources' },
        { label: 'Testimonials', path: '/testimonials' }
      ]
    }
  ];
}
