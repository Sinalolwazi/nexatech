import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: 'bi-cloud-arrow-up',
      title: 'Cloud Infrastructure & Migration',
      description: 'We help businesses move to the cloud seamlessly — designing, migrating, and optimizing infrastructure on AWS, Azure, and GCP. Our team handles everything from initial architecture design to ongoing cost optimization.',
      features: ['Multi-cloud architecture', 'Zero-downtime migration', 'Cost optimization', '24/7 monitoring'],
      tag: 'Cloud'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business from modern cyber threats with our comprehensive security services. From penetration testing to compliance audits (SOC2, ISO 27001, GDPR), we keep your systems and data safe.',
      features: ['Penetration testing', 'Security audits', 'Compliance frameworks', 'Incident response'],
      tag: 'Security'
    },
    {
      icon: 'bi-graph-up',
      title: 'Data Analytics & BI',
      description: 'Unlock the power of your business data. We build custom analytics dashboards, data pipelines, and machine learning models that deliver actionable insights and drive smarter decisions.',
      features: ['Custom dashboards', 'ML & predictive analytics', 'ETL pipelines', 'Real-time reporting'],
      tag: 'Analytics'
    },
    {
      icon: 'bi-cpu',
      title: 'AI & Process Automation',
      description: 'Automate repetitive workflows and embed AI capabilities into your operations. From intelligent document processing to chatbot development, we help you do more with less.',
      features: ['Workflow automation', 'AI integration', 'NLP & chatbots', 'RPA development'],
      tag: 'AI'
    },
    {
      icon: 'bi-code-slash',
      title: 'Custom Software Development',
      description: 'From concept to production, we build high-quality bespoke software solutions tailored to your unique business needs. Our Agile teams deliver fast, iterate quickly, and never compromise on quality.',
      features: ['Full-stack development', 'API design', 'Mobile apps', 'Agile delivery'],
      tag: 'Dev'
    },
    {
      icon: 'bi-headset',
      title: 'Managed IT Support',
      description: 'Let our expert team manage your IT infrastructure so you can focus on your core business. We offer SLA-backed support, proactive maintenance, and dedicated account management.',
      features: ['24/7 helpdesk', 'Proactive monitoring', 'SLA guarantees', 'Dedicated account manager'],
      tag: 'Support'
    }
  ];
}
