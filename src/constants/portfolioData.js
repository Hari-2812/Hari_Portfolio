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
  resumeUrl: "https://drive.google.com/file/d/1OTzXIgonVHfHzX0_kFs6pYcvoPp2lPLW/view?usp=sharing",
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
    client: "Techzon Academy",
    github: "https://github.com/Hari-2812/Lms-System-Techzon",
    liveUrl: "https://lms-system-techzon.vercel.app",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    shortDescription: "An enterprise-grade LMS providing secure role-based access, course builders, student dashboards, and payment gateways for educational academies.",
    description: "Techzon LMS is a learning portal built to automate course enrollment, content distribution, and student progress tracking. It eliminates manual administration by integrating payment workflows and dashboard metrics into a single platform.",
    problem: "Techzon Academy struggled with manual processes: payment verifications took days, student credentials had to be checked via spreadsheets, and instructors lacked a central panel to track course completions, creating high administrative overhead.",
    solution: "I engineered a full-stack MERN application featuring three distinct panels (Admin, Instructor, Student) secured by JWT middleware. I integrated Razorpay checkout setups with webhook verification. When a student completes a checkout, the server automatically updates their enrollment and redirects them to their course catalog.",
    features: [
      "Secure Role-Based Route Guards (Admin, Instructor, Student dashboards)",
      "Multi-step interactive course builder with asset management configurations",
      "Lesson completion trackers displaying visual progress meters",
      "Razorpay checkout integration with secure webhook verification",
      "Real-time student registry boards tracking overall active courses",
      "Instructor messaging panels coordinating module assignments",
      "Optimized RESTful API controllers built with Mongoose validation rules"
    ],
    techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT", "Tailwind CSS", "Render"],
    architecture: "Three-tier MVC Design: React Client Views -> Express API Server & Middlewares -> MongoDB Datastore. Backend route guards inspect JWT claims to verify permissions before processing requests.",
    challenges: "Handling payment failures and dropped client sessions mid-checkout, which previously caused database inconsistencies.",
    outcome: "Solved using Razorpay webhooks. The system verifies payment confirmations out-of-band directly through digital signature verification, guaranteeing secure enrollment even if the user closes their browser. The platform reduced manual registration tasks by 95% in the first month.",
  },
  {
    id: "crm-system",
    title: "Techzon CRM Management System",
    client: "Techzon Wide",
    github: "https://github.com/Hari-2812/Messenger",
    liveUrl: "https://messenger-delta.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A centralized CRM dashboard engineered for Techzon Wide to track customer leads, communication logs, and sales pipelines with automated notification pathways.",
    description: "Designed and built a Customer Relationship Management (CRM) platform for Techzon Wide to coordinate lead lists, pipeline stages, and sales representative communication histories, improving lead-to-client conversion rates.",
    problem: "Techzon Wide struggled with scattered communication records. Client records were updated across various spreadsheets, leading to missed follow-ups, lost context, and no clear way for operations managers to evaluate sales team conversions.",
    solution: "I engineered a tailored CRM dashboard displaying real-time lead pipelines. Implemented secure JWT login parameters and sales team status markers, allowing representatives to log calls, update conversion stages, and trigger automated WhatsApp templates on status updates.",
    features: [
      "Centralized customer profile directories with active communication history logs",
      "Interactive Kanban pipeline boards showing conversion stages",
      "Sales analytics dashboards displaying conversion ratios in real time",
      "JWT-secured session states with automatic token expiration guards",
      "Pre-integrated WhatsApp Cloud API messaging controllers",
      "Exportable CSV report generators tracking representative sales logs"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "ApexCharts"],
    architecture: "Client-side state synchronization with REST controllers. Used database indexes on lead status and date keys to deliver rapid search queries under 50ms.",
    challenges: "Securing customer data records so sales representatives only access their assigned leads, while operations managers retain full pipeline visibility.",
    outcome: "Implemented hierarchical middleware checking JWT claims before database query execution. This established a secure system workspace, reducing client response times by 40%.",
  },
  {
    id: "certificate-automation",
    title: "Google Workspace Certificate Automator",
    client: "Techzon Wide",
    github: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A Google Apps Script workflow that dynamically generates PDF completion certificates, archives files in Drive, and sends HTML emails automatically.",
    description: "An operations automation system integrating Google Sheets, Slides, and Drive APIs. Upon event completions, the system maps student records, writes credentials to a template, uploads PDFs, and sends emails automatically.",
    problem: "Manually designing, exporting, and emailing completion certificates for groups of 200+ students took up to 3 days of repetitive manual work per cohort, delaying delivery and causing spelling errors.",
    solution: "I engineered a Google Apps Script automation engine. The script processes registrations in batches, replaces name anchors on certificate templates, exports files to PDF, archives them in Drive folders, and triggers HTML emails via GmailApp APIs.",
    features: [
      "Dynamic document generation utilizing Slides template anchor keys",
      "Automated PDF conversion and secure archiving in Google Drive",
      "Custom HTML email template configurations with client merge filters",
      "Transactional batch runner processing up to 500 records per execution",
      "Error verification logs flagging spelling anomalies in Google Sheets"
    ],
    techStack: ["Google Apps Script", "Google Slides API", "Google Drive API", "Gmail Service", "JavaScript"],
    architecture: "Serverless execution block running within the Google Workspace environment, calling API endpoints asynchronously on events.",
    challenges: "Navigating Google execution limits, such as email quotas and the maximum script execution run time of 6 minutes.",
    outcome: "Constructed a batch runner that logs progress row-by-row. If limits are approached, the script schedules triggers to resume automatically. The tool reduced manual task duration from 3 days to under 3 minutes, generating over 1,500 certificates without errors.",
  },
  {
    id: "progress-tracker",
    title: "Exam Preparation Goal Tracker",
    client: "Personal Project",
    github: "https://github.com/Hari-2812/progress-tracker",
    liveUrl: "https://progress-tracker-one-phi.vercel.app",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A study and productivity application designed to organize a 90-day plan, track daily study goals, and display streak analytics.",
    description: "A goal tracking portal designed for competitive exam preparation. It organizes a detailed 90-day syllabus checklist into interactive daily logs, study streaks, and progress dashboards.",
    problem: "Students studying for competitive exams frequently lose track of extensive syllabus items. Generic study planners lack detailed category lists for specific topics, causing students to fall behind on their timelines.",
    solution: "I engineered a tracking application using React, Firebase, and Tailwind CSS. The system maps the preparation syllabus, providing daily interactive checklists, study meters, and calendar blocks that reward consistent study streaks.",
    features: [
      "Dynamic 90-day syllabus check structures organized by category",
      "Study streak trackers displaying active engagement calendars",
      "Visual progress meters monitoring study completion ratios",
      "Lightweight stopwatch modules logging session study hours",
      "Responsive interface optimized for mobile study sessions"
    ],
    techStack: ["React 19", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore", "Framer Motion"],
    architecture: "Serverless React client synchronized to Firestore database collections, organized under client authentication IDs.",
    challenges: "Designing an interactive calendar grid showing study records without introducing large date utility libraries.",
    outcome: "Programmed a custom date-mapping utility in native JS, resulting in fast page loads and helping over 100+ daily active users structure their studies.",
  },
  {
    id: "analytics-avenue",
    title: "Analytics Avenue Business Showcase",
    client: "Freelance Client",
    github: "https://github.com/Hari-2812/Analytics-Avenue",
    liveUrl: "https://analytics-avenue-sand.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A high-conversion landing page designed with React and Tailwind CSS, focusing on performance scores, design details, and responsive styling.",
    description: "Designed and coded a corporate landing page showcasing SaaS analytics solutions. Built with a focus on web performance, accessibility, metadata tagging, and modern transitions.",
    problem: "The client needed a digital presence to represent their analytics consulting services. Existing templates looked outdated, loaded slowly on mobile, and failed to communicate their product features.",
    solution: "I designed and built a clean, content-first landing page based on Stripe and Linear's visual design systems. Implemented custom CSS gradients, responsive layouts, scroll transitions, and optimized media assets to secure fast page loads.",
    features: [
      "Hero sections showcasing detailed layout mockups",
      "Modern feature grids with custom hover interactions",
      "Interactive pricing tables supporting monthly/annual logic changes",
      "Responsive navigation drawer built for tablet and mobile screens",
      "Performance-tuned layouts scoring 100 on web accessibility audits"
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    architecture: "Single Page Application (SPA) designed with atomic reusable components. Custom CSS themes ensure fast rendering without loading overhead.",
    challenges: "Balancing smooth Framer Motion layouts without causing visual layout shifts (CLS) on slower mobile devices.",
    outcome: "Used CSS hardware acceleration and absolute container dimensions, delivering a marketing site with a 99+ Lighthouse performance score to help the client establish online credibility.",
  }
];

export const timelineRoadmap = [
  {
    id: 1,
    year: "2026",
    title: "Freelance Developer & Graduate",
    subtitle: "Custom SaaS applications & automations",
    description: "Built custom Learning Management Systems (LMS), CRM platforms, and Google Workspace script engines for business clients. Graduated with a B.E. in Computer Science & Engineering.",
    type: "freelance"
  },
  {
    id: 2,
    year: "2025",
    title: "IEEE Xtreme Uni Rank 4",
    subtitle: "Algorithmic challenges",
    description: "Competed in the global 24-hour programming hackathon, solving algorithmic and data structure problems. Ranked 4th at the University level.",
    type: "achievement"
  },
  {
    id: 3,
    year: "2024",
    title: "MERN Stack Specialization",
    subtitle: "Advanced web engineering",
    description: "Mastered building server-side REST API controllers, MongoDB collections, JWT authentications, and stateful React interfaces.",
    type: "education"
  },
  {
    id: 4,
    year: "2023",
    title: "300+ Algorithmic Challenges",
    subtitle: "Data structures focus",
    description: "Solved algorithmic challenges on LeetCode, HackerRank, and GeeksforGeeks, focusing on arrays, binary search trees, and dynamic programming.",
    type: "achievement"
  },
  {
    id: 5,
    year: "2022",
    title: "Anna University Academic Track",
    subtitle: "Foundations of computing",
    description: "Began Bachelor of Engineering in Computer Science. Focused on OOP, database management systems, networks, and software design principles.",
    type: "education"
  }
];

export const education = {
  degree: "Bachelor of Engineering",
  major: "Computer Science and Engineering",
  institution: "Anna University Affiliate, Tamil Nadu",
  graduationYear: "2026",
  cgpa: "8.05",
};
