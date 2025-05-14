import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { PracticeArea } from '../../core/models/practice-area.model';
import { Testimonial } from '../../core/models/testimonial.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    ContactFormComponent
  ]
})
export class HomeComponent implements OnInit {
  featuredPracticeAreas: PracticeArea[] = [
    {
      id: 1,
      title: 'Divorce',
      icon: 'balance',
      shortDescription: 'Expert guidance through the divorce process with compassion and understanding.',
      fullDescription: '',
      slug: 'divorce'
    },
    {
      id: 2,
      title: 'Child Custody',
      icon: 'family_restroom',
      shortDescription: 'Protecting your children\'s best interests with dedicated legal representation.',
      fullDescription: '',
      slug: 'child-custody'
    },
    {
      id: 3,
      title: 'Child Support',
      icon: 'child_care',
      shortDescription: 'Ensuring fair child support arrangements for your children\'s well-being.',
      fullDescription: '',
      slug: 'child-support'
    }
  ];
  
  featuredTestimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah J.',
      caseType: 'Divorce',
      rating: 5,
      text: 'Meghan guided me through a difficult divorce with compassion and expertise. She was always available to answer my questions and fought for my best interests.',
      date: '2023-09-15'
    },
    {
      id: 2,
      name: 'Michael T.',
      caseType: 'Child Custody',
      rating: 5,
      text: 'I couldn\'t have asked for a better attorney to handle my custody case. Meghan truly cared about my family and helped me secure a fair arrangement.',
      date: '2023-08-22'
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Arizona Family Law Attorney | Meghan A Miller, Esq.',
      description: 'Experienced Arizona family law attorney Meghan Miller provides expert legal representation for divorce, child custody, support, and all family law matters.',
      keywords: 'family law attorney, Arizona divorce lawyer, child custody attorney, family court representation'
    });
  }
}
