// footer.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = {
    company: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' }
    ],
    products: [
      { label: 'CloudSync Pro', path: '/products/1' },
      { label: 'SecureShield Suite', path: '/products/2' },
      { label: 'DataVault Analytics', path: '/products/3' },
      { label: 'AutomateIQ Platform', path: '/products/4' },
      { label: 'CollabSpace Enterprise', path: '/products/5' },
      { label: 'DevOps Commander', path: '/products/6' }
    ]
  };

  socials = [
    { icon: 'bi-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'bi-twitter-x', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'bi-github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'bi-youtube', url: 'https://youtube.com', label: 'YouTube' }
  ];
}