import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule,
    ContactFormComponent
  ]
})
export class ContactComponent implements OnInit {
  @ViewChild(ContactFormComponent) contactForm!: ContactFormComponent;
  
  showSuccessMessage = false;
  
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact Meghan Miller | Arizona Family Law Attorney',
      description: 'Contact Arizona family law attorney Meghan Miller to schedule a consultation regarding divorce, child custody, support, or any other family law matter.',
      keywords: 'contact family lawyer, Arizona attorney consultation, divorce consultation, family law questions'
    });
  }

  onFormSubmitted(success: boolean): void {
    if (success) {
      this.showSuccessMessage = true;
      
      // Scroll to success message
      setTimeout(() => {
        const element = document.getElementById('success-message');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      
      // Hide success message after some time
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 8000);
    }
  }
}
