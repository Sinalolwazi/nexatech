import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      category: 'Industry News',
      title: 'The Rise of AI-Driven Automation in African Enterprises',
      excerpt: 'African enterprises are rapidly adopting AI-powered automation to overcome infrastructure challenges and leapfrog legacy systems. We explore how NexaTech clients are transforming operations with intelligent workflow automation — and what the rest of the world can learn from them.',
      author: 'Thabo Nkosi',
      authorInitials: 'TN',
      date: 'March 28, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80',
      tags: ['AI', 'Automation', 'Africa']
    },
    {
      id: 2,
      category: 'Case Study',
      title: 'How RetailGiant SA Reduced IT Costs by 40% with CloudSync Pro',
      excerpt: 'RetailGiant SA faced mounting IT infrastructure costs and unreliable on-premise systems. After migrating to NexaTech\'s CloudSync Pro, they achieved a 40% cost reduction, 99.99% uptime, and real-time inventory visibility across 350 stores nationwide.',
      author: 'Sarah Chen',
      authorInitials: 'SC',
      date: 'March 15, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80',
      tags: ['Case Study', 'Cloud', 'Retail']
    },
    {
      id: 3,
      category: 'Technical',
      title: 'Zero-Trust Security: Why Perimeter Defense Is No Longer Enough',
      excerpt: 'Traditional perimeter-based security models are failing modern enterprises. With hybrid work, cloud-native apps, and sophisticated threat actors, zero-trust architecture has become the gold standard. Our team breaks down how to implement it step by step.',
      author: 'Marcus Osei',
      authorInitials: 'MO',
      date: 'February 20, 2025',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80',
      tags: ['Security', 'Zero-Trust', 'Technical']
    },
    {
      id: 4,
      category: 'Case Study',
      title: 'DataVault Analytics Helped FinanceFirst Increase Revenue by R18M',
      excerpt: 'FinanceFirst was sitting on years of untapped transaction data. By deploying DataVault Analytics, their team uncovered a high-value customer segment that generated R18 million in incremental revenue within just 6 months of launch.',
      author: 'Priya Sharma',
      authorInitials: 'PS',
      date: 'January 10, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80',
      tags: ['Case Study', 'Analytics', 'Finance']
    }
  ];
}
