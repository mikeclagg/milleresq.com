import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { Testimonial } from '../../core/models/testimonial.model';
import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    MatIconModule,
    MatButtonModule,
    DatePipe
  ]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah J.',
      caseType: 'Divorce',
      rating: 5,
      text: 'Meghan guided me through a difficult divorce with compassion and expertise. She was always available to answer my questions and fought for my best interests. Her knowledge of family law in Arizona helped me secure a fair settlement that allowed me to move forward with confidence. I highly recommend her services to anyone facing a similar situation.',
      date: '2023-09-15'
    },
    {
      id: 2,
      name: 'Michael T.',
      caseType: 'Child Custody',
      rating: 5,
      text: 'I couldn\'t have asked for a better attorney to handle my custody case. Meghan truly cared about my family and helped me secure a fair arrangement. She took the time to understand my relationship with my children and crafted arguments that demonstrated my commitment as a parent. The judge agreed with her position, and I now have a custody arrangement that works for everyone involved.',
      date: '2023-08-22'
    },
    {
      id: 3,
      name: 'Jennifer P.',
      caseType: 'Child Support Modification',
      rating: 5,
      text: 'Attorney Miller helped me navigate a complicated child support modification case. When my ex-spouse\'s financial situation changed significantly, Meghan helped me file for an appropriate adjustment. She gathered all the necessary financial evidence and presented a compelling case to the court. Thanks to her efforts, my children now receive the support they deserve.',
      date: '2023-07-10'
    },
    {
      id: 4,
      name: 'David R.',
      caseType: 'Property Division',
      rating: 5,
      text: 'Meghan\'s expertise in property division was invaluable during my divorce. She carefully analyzed our assets, including retirement accounts and real estate investments, and developed a strategy to ensure I received an equitable share. Her attention to detail uncovered assets I wasn\'t even aware of, and her negotiation skills helped us avoid a lengthy court battle.',
      date: '2023-06-18'
    },
    {
      id: 5,
      name: 'Amanda K.',
      caseType: 'Spousal Maintenance',
      rating: 4,
      text: 'I was concerned about my financial future after my marriage ended, but Meghan helped me secure fair spousal maintenance. She carefully documented my contributions to the marriage and my future needs to build a strong case. While the negotiation process was challenging at times, Meghan remained a steady advocate for my interests throughout.',
      date: '2023-05-03'
    },
    {
      id: 6,
      name: 'Thomas L.',
      caseType: 'Paternity Case',
      rating: 5,
      text: 'Meghan helped me establish paternity and secure parenting rights for my daughter. The process was unfamiliar to me, but she explained everything clearly and guided me through each step. Thanks to her help, I now have a legal relationship with my child and a clear parenting plan. I\'m grateful for her knowledge and compassionate approach.',
      date: '2023-04-11'
    },
    {
      id: 7,
      name: 'Rebecca N.',
      caseType: 'Domestic Violence Protection',
      rating: 5,
      text: 'When I needed protection for myself and my children, Meghan acted quickly and decisively. She helped me obtain an emergency order of protection and then represented me in subsequent hearings. She ensured that my voice was heard and that the court understood the gravity of my situation. I felt supported and protected throughout the entire process.',
      date: '2023-03-25'
    },
    {
      id: 8,
      name: 'Kevin M.',
      caseType: 'Post-Decree Modification',
      rating: 4,
      text: 'Years after my divorce, I needed to modify our original decree due to significant life changes. Meghan reviewed my case and identified the strongest arguments for modification. She helped me gather relevant evidence and presented a compelling case to the court. The process was smoother than I expected, and the outcome has made a positive difference in my life.',
      date: '2023-02-19'
    }
  ];
  
  filteredTestimonials: Testimonial[] = [];
  caseTypeFilter: string = 'all';
  
  caseTypes = [
    { value: 'all', label: 'All Cases' },
    { value: 'Divorce', label: 'Divorce' },
    { value: 'Child Custody', label: 'Child Custody' },
    { value: 'Child Support Modification', label: 'Child Support' },
    { value: 'Property Division', label: 'Property Division' },
    { value: 'Spousal Maintenance', label: 'Spousal Maintenance' },
    { value: 'Paternity Case', label: 'Paternity' },
    { value: 'Domestic Violence Protection', label: 'Domestic Violence' },
    { value: 'Post-Decree Modification', label: 'Post-Decree Modifications' }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Client Testimonials | Meghan A Miller, Esq.',
      description: 'Read testimonials from clients who have worked with Arizona family law attorney Meghan Miller on divorce, custody, support, and other family law matters.',
      keywords: 'family law testimonials, divorce lawyer reviews, child custody attorney testimonials, client success stories'
    });
    
    this.filterTestimonials('all');
  }

  filterTestimonials(caseType: string): void {
    this.caseTypeFilter = caseType;
    
    if (caseType === 'all') {
      this.filteredTestimonials = [...this.testimonials];
    } else {
      this.filteredTestimonials = this.testimonials.filter(
        testimonial => testimonial.caseType === caseType
      );
    }
  }
}
