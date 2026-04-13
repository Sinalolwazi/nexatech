import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'CloudSync Pro',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
      shortDescription: 'Enterprise cloud synchronization and backup solution.',
      fullDescription: 'CloudSync Pro is our flagship cloud synchronization platform designed for enterprise teams. It offers real-time data synchronization across unlimited devices, automated backup scheduling, end-to-end encryption, and granular access controls. With 99.99% uptime SLA and 24/7 support, CloudSync Pro ensures your data is always available when you need it. Supports AWS, Azure, and Google Cloud integrations out of the box.',
      category: 'Cloud',
      rating: 4.8,
      reviews: 312
    },
    {
      id: 2,
      name: 'SecureShield Suite',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      shortDescription: 'Advanced cybersecurity platform for modern businesses.',
      fullDescription: 'SecureShield Suite provides comprehensive cybersecurity protection including real-time threat detection, AI-powered anomaly detection, zero-trust network access, and automated incident response. The suite includes firewall management, SIEM integration, vulnerability scanning, and compliance reporting. Protect your organization from ransomware, phishing, and advanced persistent threats with military-grade security.',
      category: 'Security',
      rating: 4.9,
      reviews: 198
    },
    {
      id: 3,
      name: 'DataVault Analytics',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      shortDescription: 'Powerful business intelligence and data analytics platform.',
      fullDescription: 'DataVault Analytics transforms raw data into actionable business insights. With intuitive drag-and-drop dashboards, real-time data visualization, predictive analytics powered by machine learning, and seamless integration with over 200 data sources, DataVault empowers data-driven decision making at every level of your organization. Supports SQL, NoSQL, and streaming data sources.',
      category: 'Analytics',
      rating: 4.7,
      reviews: 445
    },
    {
      id: 4,
      name: 'DevOps Accelerator',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      shortDescription: 'Complete CI/CD pipeline and DevOps automation toolkit.',
      fullDescription: 'DevOps Accelerator streamlines your software delivery pipeline with automated CI/CD workflows, container orchestration, infrastructure as code templates, and comprehensive monitoring. Integrates natively with GitHub, GitLab, Jenkins, Docker, and Kubernetes. Reduce deployment times by up to 80% and increase release frequency while maintaining rock-solid stability. Built-in rollback mechanisms ensure zero-downtime deployments.',
      category: 'Development',
      rating: 4.6,
      reviews: 267
    },
    {
      id: 5,
      name: 'AI Assistant Hub',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
      shortDescription: 'Enterprise AI assistant for productivity and automation.',
      fullDescription: 'AI Assistant Hub brings cutting-edge artificial intelligence to your workplace. Automate repetitive tasks, generate reports, analyze documents, answer employee queries, and integrate with your existing tools through our powerful API. Supports natural language processing in 40+ languages, custom model fine-tuning, and enterprise-grade privacy controls. Seamlessly integrates with Microsoft 365, Google Workspace, and Slack.',
      category: 'AI',
      rating: 4.8,
      reviews: 523
    },
    {
      id: 6,
      name: 'NetworkGuard Monitor',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      shortDescription: 'Real-time network monitoring and performance optimization.',
      fullDescription: 'NetworkGuard Monitor provides complete visibility into your network infrastructure with real-time traffic analysis, bandwidth monitoring, latency tracking, and automated alerting. The intuitive topology map lets you visualize your entire network at a glance. AI-powered anomaly detection identifies performance bottlenecks before they impact users. Supports SNMP, NetFlow, sFlow, and REST API integrations.',
      category: 'Network',
      rating: 4.5,
      reviews: 189
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }
}
