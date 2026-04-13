export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'CloudSync Pro',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    shortDescription: 'Enterprise-grade cloud synchronization and backup solution.',
    fullDescription: 'CloudSync Pro is our flagship cloud synchronization platform designed for enterprise environments. It provides real-time data synchronization across unlimited devices, automated backups with 99.99% uptime SLA, end-to-end encryption, and granular access controls. Supports AWS, Azure, and GCP integrations out of the box. Ideal for teams of 10 to 10,000+ users.',
    category: 'Cloud',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'SecureShield Suite',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    shortDescription: 'Comprehensive cybersecurity platform for modern businesses.',
    fullDescription: 'SecureShield Suite offers multi-layered cybersecurity protection including AI-powered threat detection, real-time vulnerability scanning, intrusion prevention, and incident response automation. Features a unified dashboard for security operations, compliance reporting (SOC2, ISO 27001), and 24/7 monitoring. Your business fortress against modern cyber threats.',
    category: 'Security',
    badge: 'Featured'
  },
  {
    id: 3,
    name: 'DataVault Analytics',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    shortDescription: 'Powerful business intelligence and data analytics engine.',
    fullDescription: 'DataVault Analytics transforms raw business data into actionable insights. Featuring drag-and-drop report building, predictive analytics powered by machine learning, real-time dashboards, and over 50 data connectors. Supports data from SQL, NoSQL, APIs, spreadsheets, and cloud data warehouses. Export reports in PDF, Excel, or embed them directly into your applications.',
    category: 'Analytics'
  },
  {
    id: 4,
    name: 'AutomateIQ Platform',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    shortDescription: 'No-code business process automation and workflow management.',
    fullDescription: 'AutomateIQ empowers teams to automate repetitive business processes without writing a single line of code. Build complex workflows using our visual drag-and-drop builder, connect to 200+ third-party apps, set up triggers and conditions, and monitor process health in real time. Reduce operational overhead by up to 70% and free your team to focus on what matters.',
    category: 'Automation',
    badge: 'New'
  },
  {
    id: 5,
    name: 'CollabSpace Enterprise',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    shortDescription: 'Unified team collaboration hub for distributed teams.',
    fullDescription: 'CollabSpace Enterprise brings your team together in one powerful platform. Features include real-time document co-editing, video conferencing with AI transcription, project management boards, team wikis, and integrated chat. Fine-grained permissions, SSO support, and audit logs make it enterprise-ready. Works seamlessly across web, desktop, and mobile devices.',
    category: 'Collaboration'
  },
  {
    id: 6,
    name: 'DevOps Commander',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    shortDescription: 'End-to-end DevOps pipeline management and CI/CD automation.',
    fullDescription: 'DevOps Commander is the all-in-one platform for managing your entire software delivery lifecycle. Includes CI/CD pipeline builder, container orchestration, infrastructure-as-code templates, automated testing integration, deployment rollback, performance monitoring, and cost optimization insights. Supports GitHub, GitLab, Bitbucket, Jenkins, and more.',
    category: 'DevOps',
    badge: 'Pro'
  }
];
