// Premium Client-Focused Portfolio Data Constants for Hari Prasath K

export const personalInfo = {
  name: "Hari Prasath K",
  title: "Product-Focused Software Engineer",
  subtitle: "Full-Stack Web Application Developer",
  summary: "I engineer high-performance web systems, custom CRM dashboards, student learning portals, and business workflow automations using the MERN Stack. My focus is on writing clean, scalable architecture and secure auth structures that solve real-world operational bottlenecks for startups and growing enterprises.",
  email: "v.hari2812@gmail.com",
  phone: "+91 9361876698",
  location: "Tamil Nadu, India",
  github: "https://github.com/Hari-2812",
  linkedin: "https://www.linkedin.com/in/hari-prasath-72b702259/",
  whatsapp: "https://wa.me/919361876698",
  resumeUrl: "https://drive.google.com/file/d/18xS4C22_Rbpu8-mN5XlN9dQFKU0I7TOE/view?usp=sharing",
};

export const achievements = [
  { id: "projects", count: 5, suffix: "+", label: "SaaS Apps Shipped" },
  { id: "dsa", count: 300, suffix: "+", label: "Algorithmic Challenges Solved" },
  { id: "rank", count: 4, suffix: "", label: "IEEE Xtreme University Rank" },
  { id: "specialist", count: 1, suffix: "", label: "Full-Stack Specialist" },
];

export const skills = {
  frontend: [
    { name: "React (v19)", category: "Frontend Layer", level: 90, description: "Engineering modular views using declarative hook cycles, custom context stores, and optimized render architectures.", projects: ["LMS Ecosystem", "CRM Pipeline", "Checklist Tracker"], related: ["Vite", "Next.js", "Redux"] },
    { name: "Tailwind CSS", category: "Frontend Layer", level: 95, description: "Building adaptive layouts, responsive grids, and design tokens using utility-first styling structures.", projects: ["LMS Ecosystem", "Checklist Tracker", "Brand Showcase"], related: ["PostCSS", "Framer Motion"] },
    { name: "JavaScript (ES6+)", category: "Frontend Layer", level: 90, description: "Designing event-driven interfaces, async operations, modular script logic, and state synchronizers.", projects: ["All Production Builds"], related: ["TypeScript", "HTML5", "CSS3"] },
    { name: "Semantic HTML5 & CSS3", category: "Frontend Layer", level: 95, description: "Structuring accessible, SEO-compliant markup and fluid grid coordinates built for high performance.", projects: ["All Production Builds"], related: ["Tailwind", "CSS Grid", "Flexbox"] },
  ],
  backend: [
    { name: "Node.js", category: "Logic Controller Layer", level: 85, description: "Developing asynchronous runtime servers and microservices managing high-volume data payloads.", projects: ["LMS Ecosystem", "CRM Pipeline", "Checklist Tracker"], related: ["npm", "Express"] },
    { name: "Express.js", category: "Logic Controller Layer", level: 88, description: "Configuring REST API middleware patterns, input verification checkers, and custom error filters.", projects: ["LMS Ecosystem", "CRM Pipeline", "Checklist Tracker"], related: ["REST APIs", "MVC Pattern"] },
    { name: "REST APIs", category: "Logic Controller Layer", level: 90, description: "Designing secure client-server communication systems featuring indexed payload filters and query keys.", projects: ["LMS Ecosystem", "CRM Pipeline", "Checklist Tracker"], related: ["JSON", "JWT", "Postman"] },
    { name: "Auth (JWT / RBAC)", category: "Logic Controller Layer", level: 92, description: "Engineering token-based verification systems and hierarchical Role-Based Access Control paths.", projects: ["LMS Ecosystem", "CRM Pipeline", "Checklist Tracker"], related: ["bcrypt", "Cookies", "HTTPS"] }
  ],
  database: [
    { name: "MongoDB", category: "Data Model Layer", level: 85, description: "Modeling document collections with Mongoose validation frameworks, schema links, and aggregate indexes.", projects: ["LMS Ecosystem", "CRM Pipeline", "Checklist Tracker"], related: ["Mongoose", "Atlas"] },
    { name: "SQL Datastores", category: "Data Model Layer", level: 80, description: "Designing relational database systems featuring entity relationships, key constraints, and transactional safety.", projects: ["Academic Architectures"], related: ["PostgreSQL", "MySQL"] }
  ],
  integrations: [
    { name: "Razorpay Checkout", category: "Integration Matrix", level: 88, description: "Integrating checkout SDK steps, verifying out-of-band payment webhooks, and tracking webhook transaction logs.", projects: ["LMS Ecosystem"], related: ["APIs", "Webhooks"] },
    { name: "Google Apps Script", category: "Integration Matrix", level: 92, description: "Automating Google Sheets databases and Drive folders to generate bulk completion certificates.", projects: ["Workspace Automator"], related: ["Automation", "Drive API"] },
    { name: "WhatsApp Cloud API", category: "Integration Matrix", level: 82, description: "Configuring automated meta messaging template updates triggered by CRM client pipeline actions.", projects: ["CRM Pipeline"], related: ["Meta APIs"] },
    { name: "Firebase Service", category: "Integration Matrix", level: 80, description: "Synchronizing real-time datastores and database nodes for instant client-side state updates.", projects: ["Checklist Tracker"], related: ["NoSQL"] }
  ],
  tools: [
    { name: "Git & Version Control", category: "DevOps Layer", level: 90, description: "Managing modular source code repositories, semantic branching models, and release versioning.", projects: ["All Production Builds"], related: ["CI/CD", "Pull Requests"] },
    { name: "Render & Vercel", category: "DevOps Layer", level: 85, description: "Configuring environment keys and deploying serverless applications optimized for loading speed.", projects: ["All Production Builds"], related: ["Hosting", "DNS"] },
    { name: "Postman API Suite", category: "DevOps Layer", level: 88, description: "Writing REST API collections to test endpoint validations, payload structures, and response boundaries.", projects: ["All Production Builds"], related: ["API Docs"] }
  ],
  programming: [
    { name: "Java Systems", category: "Algorithmic Foundations", level: 85, description: "Writing structured, object-oriented solutions centered on algorithmic complexity and optimizations.", projects: ["DSA Sandbox"], related: ["OOP", "Data Structures"] },
    { name: "Python Scripts", category: "Algorithmic Foundations", level: 75, description: "Constructing business scripting modules, file converters, and basic data processing workflows.", projects: ["Automation Scripts"], related: ["Flask"] },
    { name: "C Computing", category: "Algorithmic Foundations", level: 80, description: "Mastering lower-level memory references and foundational structural programming concepts.", projects: ["Academic Projects"], related: ["Data Structures"] }
  ]
};

export const services = [
  {
    id: "web-architectures",
    title: "Custom Full-Stack Applications (MERN)",
    shortDescription: "Startups often lose momentum building basic templates that can't scale. I engineer production-ready web platforms with robust databases and optimized views to support business operations.",
    subServices: [
      "MERN Stack Web Development",
      "Full Stack Web Applications",
      "Dashboard & Admin Panel Development",
      "Responsive Website Development"
    ],
    deliverables: "A production-deployed application combining an optimized React client, a secure Express API server, indexed MongoDB datastores, and detailed system designs.",
    targetAudience: "Startups, SaaS founders, and product managers requiring stable MVPs or enterprise platforms engineered from the ground up.",
    features: [
      "Modular components structured around premium UX templates",
      "Optimized state logic minimizing DOM re-render footprints",
      "Responsive layouts built for seamless mobile performance",
      "Data grids equipped with custom filters and search capabilities"
    ],
    clientBenefits: "Reduces code maintenance and operational overhead by up to 35% through a unified, well-documented JavaScript/TypeScript codebase.",
    techUsed: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite"]
  },
  {
    id: "enterprise-workflows",
    title: "Centralized CRM & Learning Ecosystems (LMS)",
    shortDescription: "Managing customer workflows or student pipelines via disjointed spreadsheets causes delays and admin overhead. I replace manual workflows with custom digital pipelines.",
    subServices: [
      "CRM Development",
      "LMS Development",
      "Dashboard & Admin Panel Development",
      "Authentication & Authorization Systems"
    ],
    deliverables: "Centralized client-management pipelines, student progress analytics panels, checkout interfaces, and multi-tier access controllers.",
    targetAudience: "Service businesses, educational academies, and training organizations looking to automate student registry and conversion paths.",
    features: [
      "Kanban pipeline views tracking customer conversions in real time",
      "Course module metrics monitoring completion percentages",
      "Multi-dashboard configurations (Admin, Instructor, Student portals)",
      "Secure middleware checking JWT signatures and route parameters"
    ],
    clientBenefits: "Ditches spreadsheet clutter, automating student enrollment and sales tracking to save up to 60% of administrative overhead.",
    techUsed: ["React", "Express", "JWT Auth", "Razorpay Checkout", "MongoDB"]
  },
  {
    id: "api-integrations",
    title: "Secure API Integrations & Transaction Layers",
    shortDescription: "Unsecured APIs and payment configurations risk transaction failures. I write secure server controllers with webhook verify checks and meta messaging alerts.",
    subServices: [
      "REST API Development",
      "Authentication & Authorization Systems",
      "Payment Gateway Integration",
      "Performance Optimization"
    ],
    deliverables: "JWT-secured routes, webhook verify modules, API specifications, and Postman collection files.",
    targetAudience: "E-commerce retailers, SaaS founders, and operations leaders needing secure payment setups and messaging pathways.",
    features: [
      "Hierarchical Role-Based Access Control (RBAC) safeguarding endpoints",
      "Razorpay webhooks with digital signature verification checks",
      "Meta WhatsApp template notifications triggered by server actions",
      "Indexed database query paths delivering response times under 50ms"
    ],
    clientBenefits: "Secures financial transactions and user data, improving checkout reliability to boost conversions by up to 25%.",
    techUsed: ["Express.js", "JWT Token", "Razorpay SDK", "WhatsApp Cloud API", "Postman"]
  },
  {
    id: "operations-automation",
    title: "Business Workflow & Document Automation",
    shortDescription: "Copying student credentials or manually generating PDF invoices consumes hours. I write automated background scripts to handle data pipelines.",
    subServices: [
      "Business Automation Solutions",
      "Deployment & Hosting",
      "Performance Optimization"
    ],
    deliverables: "Automated spreadsheet scripts, Drive folder synchronization engines, and server performance reports.",
    targetAudience: "Operations managers and business owners wanting to automate repetitive Google Workspace tasks.",
    features: [
      "Google Sheets triggers executing automated script logic on changes",
      "Google Slides mapping modules converting rows into styled PDFs",
      "Batch execution algorithms running within daily Google service quotas",
      "Production cloud configurations scoring 95+ on performance audits"
    ],
    clientBenefits: "Converts spreadsheet data into emails and PDF files automatically, saving operations teams up to 20 manual hours weekly.",
    techUsed: ["Google Apps Script", "Google Drive API", "Render", "Vercel", "Lighthouse"]
  }
];

export const projects = [
  {
    id: "lms-system",
    title: "Techzon Learning Management System",
    client: "LEARNING PLATFORM",
    github: "https://github.com/Hari-2812/Lms-System-Techzon.git",
    liveUrl: "https://lms-system-techzon.vercel.app/login",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    hoverText: "Explore how a complete learning workflow was engineered.",
    shortDescription: "A full-stack learning management platform for managing learners, courses, content, progress, and administrative workflows.",
    description: "Techzon LMS is a learning portal built to automate course enrollment, content distribution, and student progress tracking. It eliminates manual administration by integrating workflows into a centralized platform.",
    problem: "Techzon Academy struggled with manual processes: managing student credentials, tracking progress, and coordinating administrative workflows took days of manual effort.",
    solution: "I engineered a full-stack MERN application featuring distinct secure panels (Admin, Instructor, Student) secured by JWT middleware. The system automatically manages enrollment and provides a centralized catalog and tracking workflow.",
    features: [
      "Secure role-based route guards (Admin, Instructor, Student)",
      "Course and content management system",
      "Student progress tracking and enrollment management",
      "Centralized administrative workflows"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    architecture: "Three-tier MVC Design: React Client Views -> Express API Server & Middlewares -> MongoDB Datastore. Backend route guards inspect JWT claims to verify permissions before processing requests.",
    challenges: "Creating a seamless tracking experience for students while maintaining strict role-based access for instructors and admins.",
    outcome: "Built a centralized system that replaced manual registration tasks and provided a scalable learning workflow for the academy.",
  },
  {
    id: "crm-system",
    title: "Techzon CRM Management System",
    client: "CRM / BUSINESS OPERATIONS",
    github: "https://github.com/Hari-2812/Techzon-Dashboard.git",
    liveUrl: "https://techzon-dashboard.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    hoverText: "See how operational workflows became a centralized CRM system.",
    shortDescription: "A business management and CRM platform for organizing operational data, managing workflows, and providing centralized administrative visibility.",
    description: "Designed and built a CRM platform for Techzon Wide to coordinate business operations, track workflows, and provide an administrative dashboard for operational visibility.",
    problem: "Techzon Wide struggled with scattered records across various spreadsheets, leading to lost context and no clear way for operations managers to evaluate workflows.",
    solution: "I engineered a tailored CRM dashboard displaying real-time data and administrative controls. Implemented secure JWT login parameters allowing structured role-based access for operational workflows.",
    features: [
      "Centralized administrative dashboard",
      "Workflow and operational data management",
      "Role-based access controls and secure authentication",
      "Real-time operational visibility"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    architecture: "Client-side state synchronization with REST controllers. Used optimized database indexes to deliver rapid search and data retrieval.",
    challenges: "Securing operational data records so users only access appropriate workflows, while operations managers retain full administrative visibility.",
    outcome: "Implemented hierarchical middleware checking JWT claims before database query execution, establishing a secure and organized operational workflow.",
  },
  {
    id: "messenger-crm",
    title: "Messenger — Email Campaign CRM",
    client: "MARKETING AUTOMATION",
    github: "https://github.com/Hari-2812/Messenger.git",
    liveUrl: "https://messenger-delta.vercel.app/",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    hoverText: "Explore the system behind contact and campaign workflows.",
    shortDescription: "A CRM and email campaign platform designed to manage contacts, organize campaign workflows, and streamline business communication.",
    description: "A centralized CRM engineered to manage bulk contacts and organize email campaign workflows, providing a structured approach to business communication and marketing automation.",
    problem: "Managing contact lists and coordinating email campaigns manually causes disorganized workflows, fragmented communication history, and inefficient bulk handling.",
    solution: "I engineered a marketing automation CRM that organizes contact management and campaign workflows. The system provides tools for bulk contact handling and streamlined email automation.",
    features: [
      "Contact management and bulk handling",
      "Email campaign workflow organization",
      "Marketing automation controls",
      "CRM functionality and communication tracking"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    architecture: "Full-stack application utilizing a React frontend paired with an Express API backend and MongoDB to securely manage campaign workflows.",
    challenges: "Structuring the database and application logic to effectively manage bulk contact lists and complex campaign states without performance degradation.",
    outcome: "Created a streamlined communication CRM that organizes email workflows and centralizes contact management into a single actionable dashboard.",
  },
  {
    id: "progress-tracker",
    title: "Exam Preparation Goal Tracker",
    client: "PRODUCTIVITY / PROGRESS TRACKING",
    github: "https://github.com/Hari-2812/progress-tracker.git",
    liveUrl: "https://progress-tracker-one-phi.vercel.app/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    hoverText: "See how preparation goals were turned into a measurable progress system.",
    shortDescription: "A progress tracking application designed to help exam aspirants monitor preparation goals, consistency, and measurable progress.",
    description: "A productivity portal designed for competitive exam preparation. It organizes a detailed timeline into interactive daily logs, study goals, and measurable progress tracking.",
    problem: "Students studying for competitive exams frequently lose track of extensive syllabus items and lack a centralized workflow to measure their consistency and preparation goals.",
    solution: "I engineered a tracking application using React and Tailwind CSS. The system maps the preparation workflow, providing daily interactive goal tracking and measurable progress metrics.",
    features: [
      "Interactive goal tracking and progress monitoring",
      "Preparation workflow organization",
      "Consistency and engagement tracking metrics",
      "Responsive productivity interface"
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Firebase"],
    architecture: "Serverless React client synchronized to an external datastore, providing real-time progress updates and goal tracking.",
    challenges: "Designing an interactive progress grid showing engagement records seamlessly across responsive layouts.",
    outcome: "Delivered a lightweight, highly responsive application that allows aspirants to monitor their consistency and track preparation goals accurately.",
  },
  {
    id: "analytics-avenue",
    title: "Analytics Avenue",
    client: "PRODUCT / MARKETING WEBSITE",
    github: "https://github.com/Hari-2812/Analytics-Avenue.git",
    liveUrl: "https://analytics-avenue-sand.vercel.app/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    hoverText: "Explore a product-focused frontend built for clear digital presentation.",
    shortDescription: "A responsive product-focused landing page designed to present Analytics Avenue's offering through a structured, modern web experience.",
    description: "Designed and coded a responsive marketing landing page showcasing a product offering. Built with a focus on UI implementation, conversion sections, and modern responsive layouts.",
    problem: "The product needed a digital presence to clearly communicate its offering. Existing templates failed to present the features through a structured, modern web experience.",
    solution: "I built a clean, content-first frontend presentation using React and Tailwind CSS. Implemented responsive layouts, UI interactions, and conversion-focused sections.",
    features: [
      "Responsive frontend UI implementation",
      "Product presentation and conversion-focused sections",
      "Interactive layouts and clear digital structuring",
      "Modern web experience and styling"
    ],
    techStack: ["React", "Vite", "Tailwind CSS"],
    architecture: "Component-driven Single Page Application (SPA) utilizing atomic UI components and responsive layout structures.",
    challenges: "Structuring the product presentation to remain clear and conversion-focused across all device viewports (desktop, tablet, mobile).",
    outcome: "Built a visually clean, responsive landing page that effectively presents the product offering and guides users through a modern web experience.",
  }
];

export const timelineRoadmap = [
  {
    id: 1,
    year: "01",
    label: "DISCOVER",
    title: "Understand The Problem",
    header: "// PROCESS STAGE",
    subtitle: "REQUIREMENTS & DISCOVERY",
    description: "I start by understanding the business requirement, users, existing workflow, and the outcome the software needs to achieve.",
    type: "requirements"
  },
  {
    id: 2,
    year: "02",
    label: "PLAN",
    title: "Shape The Solution",
    header: "// PROCESS STAGE",
    subtitle: "ARCHITECTURE & PLANNING",
    description: "I translate requirements into application structure, user flows, data models, APIs, and the technical approach needed to build the product.",
    type: "architecture"
  },
  {
    id: 3,
    year: "03",
    label: "ENGINEER",
    title: "Build The Application",
    header: "// PROCESS STAGE",
    subtitle: "FULL-STACK DEVELOPMENT",
    description: "I develop the product across frontend, backend, database, authentication, dashboards, and business workflows using the technologies suited to the requirement.",
    type: "development"
  },
  {
    id: 4,
    year: "04",
    label: "INTEGRATE",
    title: "Connect The Workflow",
    header: "// PROCESS STAGE",
    subtitle: "INTEGRATION & AUTOMATION",
    description: "I connect APIs, services, notifications, data workflows, and business automation to turn individual components into a complete working system.",
    type: "automation"
  },
  {
    id: 5,
    year: "05",
    label: "TEST",
    title: "Validate The Product",
    header: "// PROCESS STAGE",
    subtitle: "TESTING & REFINEMENT",
    description: "I test core workflows, verify integrations, fix issues, and refine the application before production delivery.",
    type: "quality"
  },
  {
    id: 6,
    year: "06",
    label: "DEPLOY",
    title: "Ship To Production",
    header: "// PROCESS STAGE",
    subtitle: "DEPLOYMENT & DELIVERY",
    description: "I deploy the application, verify the production environment, and make sure the delivered software is ready for real-world use.",
    type: "delivery"
  }
];

export const education = {
  degree: "Bachelor of Engineering",
  major: "Computer Science and Engineering",
  institution: "Anna University Affiliate, Tamil Nadu",
  graduationYear: "2026",
  cgpa: "8.05",
};
