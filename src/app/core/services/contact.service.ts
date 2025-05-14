import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactForm } from '../models/contact-form.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) { }

  /**
   * Submit contact form data to the server
   * @param formData - The contact form data
   * @returns An Observable with the server response
   */
  submitContactForm(formData: ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, formData)
      .pipe(
        catchError(error => {
          console.error('Error submitting contact form:', error);
          return throwError(() => new Error('Failed to submit the contact form. Please try again later.'));
        })
      );
  }
}
