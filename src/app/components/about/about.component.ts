import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  milestones = [
    { year: '2012', title: 'Founded', desc: 'NexaTech Solutions was founded in Cape Town by a team of software engineers with a vision to simplify enterprise software.' },
    { year: '2015', title: 'First 100 Clients', desc: 'Reached 100 enterprise clients across Africa and expanded our product suite to include cloud and security solutions.' },
    { year: '2018', title: 'Global Expansion', desc: 'Opened offices in London and Singapore, serving clients across 30+ countries with localized support.' },
    { year: '2021', title: 'Series B Funding', desc: 'Secured $45M in Series B funding to accelerate product development and global sales expansion.' },
    { year: '2024', title: '500+ Clients', desc: 'Crossed 500 enterprise clients and launched our AI-powered product suite, AutomateIQ and DataVault Analytics.' }
  ];

  values = [
    { icon: 'bi-people', title: 'People First', desc: 'Our clients and team members are at the heart of every decision we make.' },
    { icon: 'bi-lightbulb', title: 'Innovation', desc: 'We constantly push boundaries, embracing new technologies to solve old problems in new ways.' },
    { icon: 'bi-award', title: 'Excellence', desc: 'We hold ourselves to the highest standards in code quality, design, and customer service.' },
    { icon: 'bi-hand-thumbs-up', title: 'Integrity', desc: 'We are transparent, honest, and accountable — to our clients and to each other.' }
  ];

  team = [
    { name: 'Thabo Nkosi', role: 'CEO & Co-Founder', bio: 'Former software architect at Amazon. 15+ years building scalable enterprise systems.', initials: 'TN' },
    { name: 'Sarah Chen', role: 'CTO & Co-Founder', bio: 'PhD in Computer Science from UCT. Expert in distributed systems and cloud architecture.', initials: 'SC' },
    { name: 'Marcus Osei', role: 'VP of Product', bio: '10+ years in product management, previously at Stripe and Intercom.', initials: 'MO' },
    { name: 'Priya Sharma', role: 'Head of Design', bio: 'Award-winning UX designer passionate about creating software people love to use.', initials: 'PS' }
  ];

  goals = [
    'Expand our AI product suite to 10+ enterprise-grade tools by 2026',
    'Achieve carbon-neutral operations across all offices by end of 2025',
    'Reach 1,000 enterprise clients globally by 2027',
    'Launch NexaTech Academy to upskill 10,000 professionals in emerging tech'
  ];
}
