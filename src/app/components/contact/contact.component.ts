import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: ContactForm = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  submitError = false;

  socialLinks = [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: 'bi-twitter-x', label: 'Twitter / X', url: 'https://twitter.com' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com' },
    { icon: 'bi-youtube', label: 'YouTube', url: 'https://youtube.com' }
  ];

  contactInfo = [
    { icon: 'bi-geo-alt', label: 'Address', value: '15 Innovation Drive, Century City, Cape Town, 7441' },
    { icon: 'bi-telephone', label: 'Phone', value: '+27 21 555 0100' },
    { icon: 'bi-envelope', label: 'Email', value: 'hello@nexatech.co.za' },
    { icon: 'bi-clock', label: 'Hours', value: 'Mon – Fri, 08:00 – 18:00 SAST' }
  ];

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
      form.resetForm();
    }
  }

  resetForm(): void {
    this.submitted = false;
  }
}
