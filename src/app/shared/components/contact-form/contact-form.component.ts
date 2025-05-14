import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.service';
import { ContactForm } from '../../../core/models/contact-form.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class ContactFormComponent implements OnInit {
  @Input() showDetailedFields: boolean = false;
  @Output() formSubmitted = new EventEmitter<boolean>();
  
  contactForm!: FormGroup;
  isSubmitting = false;
  
  caseTypes = [
    { value: 'divorce', label: 'Divorce' },
    { value: 'child-custody', label: 'Child Custody' },
    { value: 'child-support', label: 'Child Support' },
    { value: 'spousal-support', label: 'Spousal Support' },
    { value: 'domestic-violence', label: 'Domestic Violence' },
    { value: 'adoption', label: 'Adoption' },
    { value: 'paternity', label: 'Paternity' },
    { value: 'mediation', label: 'Mediation' },
    { value: 'other', label: 'Other' }
  ];
  
  referralSources = [
    { value: 'google', label: 'Google Search' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'referral', label: 'Friend/Family Referral' },
    { value: 'bar-association', label: 'Bar Association' },
    { value: 'other', label: 'Other' }
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      caseType: [''],
      howDidYouHear: [''],
      agreeToTerms: [false, Validators.requiredTrue]
    });
    
    // Only require the detailed fields if they are shown
    if (this.showDetailedFields) {
      this.contactForm.get('caseType')?.setValidators(Validators.required);
      this.contactForm.get('howDidYouHear')?.setValidators(Validators.required);
      this.contactForm.get('caseType')?.updateValueAndValidity();
      this.contactForm.get('howDidYouHear')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    const formData: ContactForm = this.contactForm.value;
    
    this.contactService.submitContactForm(formData)
      .subscribe({
        next: (response) => {
          this.snackBar.open('Thank you for contacting us! We will be in touch shortly.', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.contactForm.reset();
          this.contactForm.get('agreeToTerms')?.setValue(false);
          this.isSubmitting = false;
          this.formSubmitted.emit(true);
        },
        error: (error) => {
          this.snackBar.open(error.message || 'Failed to submit the form. Please try again later.', 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
          this.isSubmitting = false;
          this.formSubmitted.emit(false);
        }
      });
  }

  // Helper methods for form validation
  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    
    if (!control || !control.errors) {
      return '';
    }
    
    if (control.errors['required']) {
      return 'This field is required';
    }
    
    if (control.errors['email']) {
      return 'Please enter a valid email address';
    }
    
    if (control.errors['pattern']) {
      return 'Please enter a valid phone number';
    }
    
    if (control.errors['minlength']) {
      return `Must be at least ${control.errors['minlength'].requiredLength} characters`;
    }
    
    return 'Invalid input';
  }

  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
