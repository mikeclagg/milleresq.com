import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class AboutComponent implements OnInit {
  education = [
    {
      degree: 'Juris Doctor',
      institution: 'University of Arizona James E. Rogers College of Law',
      year: '2015'
    },
    {
      degree: 'Bachelor of Arts in Political Science',
      institution: 'Arizona State University',
      year: '2012'
    }
  ];
  
  admissions = [
    'Arizona State Bar',
    'U.S. District Court for the District of Arizona'
  ];
  
  certifications = [
    'Certified Family Law Specialist by the State Bar of Arizona',
    'Trained Mediator in Family Law Disputes'
  ];
  
  associations = [
    'Arizona State Bar Association',
    'Maricopa County Bar Association',
    'Arizona Family Law Association',
    'American Bar Association - Family Law Section'
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Attorney Meghan Miller | Arizona Family Law',
      description: 'Meet Meghan A Miller, an experienced Arizona family law attorney dedicated to providing compassionate and effective legal representation for family law matters.',
      keywords: 'Meghan Miller attorney, Arizona family lawyer bio, family law experience, divorce attorney background'
    });
  }
}
