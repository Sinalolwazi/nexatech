import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '12+', label: 'Years of Innovation' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Expert Support' }
  ];

  highlights = [
    { icon: 'bi-lightning-charge', title: 'Blazing Performance', desc: 'Infrastructure built for speed — sub-100ms response times at any scale.' },
    { icon: 'bi-shield-check', title: 'Enterprise Security', desc: 'SOC2 Type II certified with end-to-end encryption and zero-trust architecture.' },
    { icon: 'bi-graph-up-arrow', title: 'Scalable by Design', desc: 'Grow from startup to enterprise without changing your tech stack.' }
  ];
}
