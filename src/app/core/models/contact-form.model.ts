export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  caseType?: string;
  howDidYouHear?: string;
  agreeToTerms: boolean;
}
