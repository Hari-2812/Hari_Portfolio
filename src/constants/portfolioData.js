// Portfolio Data Constants for Hari Prasath K

export const personalInfo = {
  name: "Hari Prasath K",
  title: "Freelance MERN Stack Developer",
  subtitle: "Full Stack Web Developer",
  summary: "I build scalable web applications, CRM platforms, Learning Management Systems, and business automation solutions using the MERN Stack and modern web technologies. Focused on optimizing database performance, implementing secure authorization, and crafting clean, responsive layouts that drive business value.",
  email: "v.hari2812@gmail.com",
  phone: "+91 9361876698", // Standard Indian format
  location: "Tamil Nadu, India",
  github: "https://github.com/Hari-2812",
  linkedin: "https://linkedin.com/in/hari-prasath-k",
  whatsapp: "https://wa.me/919361876698",
  resumeUrl: "https://drive.google.com/file/d/1OTzXIgonVHfHzX0_kFs6pYcvoPp2lPLW/view?usp=sharing", // Link to resume pdf
};

export const achievements = [
  { id: "projects", count: 5, suffix: "+", label: "Projects Completed" },
  { id: "dsa", count: 300, suffix: "+", label: "DSA Problems Solved" },
  { id: "rank", count: 4, suffix: "", label: "IEEE Xtreme Uni Rank" },
  { id: "specialist", count: 1, suffix: "", label: "MERN Stack Specialist" },
];

export const skills = {
  frontend: [
    { name: "React", category: "Frontend", level: 90, description: "Declarative component architecture, Hooks, React Router, Context API, state management", projects: ["Techzon LMS", "CRM Management", "Progress Tracker"], related: ["Vite", "Next.js", "Redux"] },
    { name: "Tailwind CSS", category: "Frontend", level: 95, description: "Utility-first CSS, custom configurations, responsive grids, transitions", projects: ["Techzon LMS", "Progress Tracker", "Analytics Avenue"], related: ["PostCSS", "Framer Motion"] },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 90, description: "Asynchronous programming, DOM manipulation, modular architecture", projects: ["All Projects"], related: ["TypeScript", "HTML5", "CSS3"] },
    { name: "HTML5 & CSS3", category: "Frontend", level: 95, description: "Semantic markup, SEO optimization, responsive layout design, accessibility", projects: ["All Projects"], related: ["Tailwind", "CSS Grid", "Flexbox"] },
  ],
  backend: [
    { name: "Node.js", category: "Backend", level: 85, description: "Server-side runtime, modular backends, non-blocking I/O operations", projects: ["Techzon LMS", "CRM Management", "Progress Tracker"], related: ["npm", "Express"] },
    { name: "Express.js", category: "Backend", level: 88, description: "REST API routing, middleware, request handling, error boundaries", projects: ["Techzon LMS", "CRM Management", "Progress Tracker"], related: ["REST APIs", "MVC Pattern"] },
    { name: "REST APIs", category: "Backend", level: 90, description: "API design, secure authentication, serialization, validation", projects: ["Techzon LMS", "CRM Management", "Progress Tracker"], related: ["JSON", "JWT", "Postman"] },
    { name: "Auth (JWT / RBAC)", category: "Backend", level: 92, description: "Secure token-based auth, Role-Based Access Control, session management", projects: ["Techzon LMS", "CRM Management", "Progress Tracker"], related: ["bcrypt", "Cookies", "HTTPS"] }
  ],
  database: [
    { name: "MongoDB", category: "Database", level: 85, description: "NoSQL database, Mongoose aggregation, schema validation, indexing", projects: ["Techzon LMS", "CRM Management", "Progress Tracker"], related: ["Mongoose", "Atlas"] },
    { name: "SQL", category: "Database", level: 80, description: "Relational database queries, table relationships, transaction integrity", projects: ["Academic Projects"], related: ["PostgreSQL", "MySQL"] }
  ],
  integrations: [
    { name: "Razorpay", category: "Integrations", level: 88, description: "Payment gateway SDK, checkout integration, webhook validation", projects: ["Techzon LMS"], related: ["APIs", "Webhooks"] },
    { name: "Google Apps Script", category: "Integrations", level: 92, description: "Google Sheets/Drive API automation, PDF generation, bulk mail", projects: ["Certificate Automation"], related: ["Automation", "Drive API"] },
    { name: "WhatsApp Cloud API", category: "Integrations", level: 82, description: "Meta WhatsApp messaging integration, template messaging", projects: ["CRM Management"], related: ["Meta APIs"] },
    { name: "Firebase", category: "Integrations", level: 80, description: "Authentication, Firestore database, Hosting, cloud storage", projects: ["Progress Tracker"], related: ["NoSQL"] }
  ],
  tools: [
    { name: "Git & GitHub", category: "Tools", level: 90, description: "Branching workflows, code reviews, semantic commits, actions", projects: ["All Projects"], related: ["CI/CD", "Pull Requests"] },
    { name: "Render & Vercel", category: "Tools", level: 85, description: "Cloud platform deployment, serverless hosting, environment management", projects: ["All Projects"], related: ["Hosting", "DNS"] },
    { name: "Postman", category: "Tools", level: 88, description: "API endpoint testing, mocking, collection exports, environment variables", projects: ["All Projects"], related: ["API Docs"] }
  ],
  programming: [
    { name: "Java", category: "Programming", level: 85, description: "Object-Oriented programming, data structures, algorithms", projects: ["DSA Solving"], related: ["OOP", "Spring Boot"] },
    { name: "Python", category: "Programming", level: 75, description: "Scripting, basic data analysis, automation tasks", projects: ["Automation scripts"], related: ["Flask"] },
    { name: "C", category: "Programming", level: 80, description: "Low-level structures, memory allocation concepts, foundational computing", projects: ["Academic Projects"], related: ["Data Structures"] }
  ]
};

export const services = [
  {
    id: "web-architectures",
    title: "Core Web Architectures (MERN Stack)",
    shortDescription: "I develop scalable, secure, and high-performance web applications that help businesses automate workflows, improve customer experience, and grow efficiently.",
    subServices: [
      "MERN Stack Web Development",
      "Full Stack Web Applications",
      "Dashboard & Admin Panel Development",
      "Responsive Website Development"
    ],
    deliverables: "Production-ready React single-page client, modular Express API backend, secure MongoDB database, and detailed architecture documentation.",
    targetAudience: "Startups, SaaS founders, and B2B product managers looking to build high-end MVPs or production apps from scratch.",
    features: [
      "Custom components built around modular UX layout rules",
      "State-of-the-art State Hooks and optimized DOM re-renders",
      "Clean semantic CSS structures built for high readability",
      "Interactive data grids featuring filters and multi-sort options"
    ],
    clientBenefits: "Reduces time-to-market using a unified JS/TS codebase, decreasing overall maintenance and operational costs by up to 35%.",
    techUsed: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite"]
  },
  {
    id: "enterprise-workflows",
    title: "Enterprise Workflows (CRM & LMS)",
    shortDescription: "Custom CRM platforms and Learning Management Systems tailored to fit your exact client follow-up, cohort tracking, and educational sales workflows.",
    subServices: [
      "CRM Development",
      "LMS Development",
      "Dashboard & Admin Panel Development",
      "Authentication & Authorization Systems"
    ],
    deliverables: "Interactive sales pipelines, visual student progress trackers, checkout pages, and dedicated administrative control panels.",
    targetAudience: "Service agencies, educational training academies, and scaling digital learning platforms seeking to consolidate operations.",
    features: [
      "Dynamic Kanban pipeline cards representing client conversion steps",
      "Course module enrollment logs with completion metrics tracking",
      "Dedicated mentor review paths with student grading logs",
      "Secured session states with automatic token expiration guards"
    ],
    clientBenefits: "Ditches spreadsheet clutter, automating student registry and lead routing to save up to 60% of administrative overhead.",
    techUsed: ["React", "Express", "JWT Auth", "Razorpay Checkout", "MongoDB"]
  },
  {
    id: "api-integrations",
    title: "Secure API & Payment Gateways",
    shortDescription: "Highly performant REST APIs integrating secure third-party checkout gateways, Meta WhatsApp notifications, and authorization frameworks.",
    subServices: [
      "REST API Development",
      "Authentication & Authorization Systems",
      "Payment Gateway Integration",
      "Performance Optimization"
    ],
    deliverables: "Secured JWT routes, webhook verify functions, and fully mapped REST API collections compatible with Postman.",
    targetAudience: "E-commerce retailers, SaaS founders, and operations leaders needing secure communication and payment layers.",
    features: [
      "Role-Based Access Control (RBAC) preventing unauthorized access",
      "Razorpay webhooks with digital signature verification checks",
      "Meta WhatsApp template updates sent automatically upon actions",
      "Database schema indexes delivering response times under 50ms"
    ],
    clientBenefits: "Secures financial and user transactions, accelerating checkout performance to boost conversions by up to 25%.",
    techUsed: ["Express.js", "JWT Token", "Razorpay SDK", "WhatsApp Cloud API", "Postman"]
  },
  {
    id: "operations-automation",
    title: "Operations & Cloud Automation",
    shortDescription: "Automate repetitive data copy tasks using Google Apps Script workflows, and deploy MERN applications to cloud servers tuned for fast load speeds.",
    subServices: [
      "Business Automation Solutions",
      "Deployment & Hosting",
      "Performance Optimization"
    ],
    deliverables: "Automated document templates, drive folder sync controllers, cloud server configurations, and performance optimization logs.",
    targetAudience: "Event organizers, operations managers, and marketing directors looking to eliminate manual spreadsheet work.",
    features: [
      "Google Sheets event listeners triggering document generation",
      "Automatic PDF document builder uploading directly to Drive folders",
      "Execution chunking algorithms managing daily Google service quotas",
      "Lighthouse compliance securing scores of 95+ in performance"
    ],
    clientBenefits: "Converts event registrations into automatic certificates, reports, and emails, saving up to 20 manual hours weekly.",
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
    shortDescription: "A full-stack LMS providing secure role-based access, course management, student enrollment, progress tracking, and payment gateways for educational academies.",
    description: "Techzon LMS is an enterprise-grade learning platform built specifically to automate course enrollment, content distribution, and mentor-student interactions. It eliminates manual student registration and payment tracking by integrating payment workflows directly into the learning experience.",
    problem: "Techzon Academy suffered from disjointed administration processes: payments had to be verified manually, mentors had no single interface to trace student progress, and student dashboards were non-existent, leading to high administrative overhead and a fragmented student experience.",
    solution: "We engineered a robust full-stack solution using React and the MERN architecture. It features three distinct dashboards (Admin, Mentor, Student) backed by role-based route guard security and automated payments via Razorpay. When a student completes a checkout, enrollment is instantly updated in their personal panel, and their progress is tracked automatically as they complete course segments.",
    features: [
      "Secured Role-Based Authentication (Admin, Mentor, Student paths)",
      "Interactive Multi-Step Course Builder for Admins & Mentors",
      "Dynamic Lesson Completion Tracker with visual progress bars",
      "Razorpay Payment Gateway with automatic webhook verification",
      "Real-time student management dashboard with course enrollment counts",
      "Interactive messaging system between mentors and students",
      "Optimized RESTful API structure with robust Mongoose schemas"
    ],
    techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT", "Tailwind CSS", "Render"],
    architecture: "Three-tier MVC Architecture: Frontend React Client -> Secure Express Backend Router & Controllers -> MongoDB Database with Schema Constraints. Route guards inspect JWT signatures to verify roles on the backend.",
    challenges: "Handling payment drop-offs and maintaining session integrity during the payment lifecycle. If a client disconnected mid-checkout, database entries could become desynchronized.",
    outcome: "Successfully resolved using Razorpay webhooks. The system verifies payments out-of-band directly through digital signature verification, guaranteeing secure enrollment even if the client closes the browser. The platform reduced manual registration work by 95% within the first month of deployment.",
  },
  {
    id: "crm-system",
    title: "Techzon Wide CRM Management System",
    client: "Techzon Wide",
    github: "https://github.com/Hari-2812/Messenger",
    liveUrl: "https://messenger-delta.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A centralized CRM dashboard designed for Techzon Wide to track customer leads, communication logs, and sales workflows with WhatsApp integration.",
    description: "Developed a Customer Relationship Management (CRM) platform for Techzon Wide to manage customer records, leads, pipeline workflows, and sales team communication. The platform acts as a centralized dashboard to increase lead-to-customer conversion rates.",
    problem: "Techzon Wide struggled with scattered communication logs. Client leads were handled via spreadsheets, resulting in delayed follow-ups, lost customer context, and no clear way for management to evaluate sales team productivity.",
    solution: "Designed a tailored CRM dashboard that tracks client interactions from discovery to closing. Integrated secure JWT-based authentication and lead status columns, allowing sales representatives to log interactions, update conversion stages, and prepare WhatsApp Cloud API integration templates for automated follow-ups.",
    features: [
      "Customer Profile Repository with comprehensive engagement logs",
      "Dynamic Kanban Pipeline Board for lead tracking",
      "Sleek analytics dashboard with charts monitoring weekly conversions",
      "JWT-secured session states with auto-logout features",
      "Pre-integrated WhatsApp Messaging templates support",
      "Exportable CSV reports for management overview"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "ApexCharts"],
    architecture: "Centralized client-side state fetching backend controller routes. Uses MongoDB indexes on lead criteria to deliver rapid search filter queries under 50ms.",
    challenges: "Safeguarding client data access and verifying roles so sales personnel only view their assigned leads, while admins retain overall pipeline visibility.",
    outcome: "Implemented hierarchical middleware in Express that checks JWT payload claims before fetching records. The client secured a centralized workspace, cutting client response times by 40%.",
  },
  {
    id: "certificate-automation",
    title: "Certificate Automation System",
    client: "Techzon Wide",
    github: "#", // Client proprietary, but script showcase available
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A Google Apps Script automation workflow that generates PDF certificates, archives them in Google Drive, and mails them to students automatically.",
    description: "A business automation system that integrates Google Sheets with Google Slides and Drive APIs. Upon event completion, the system dynamically reads student records, maps details to a designed certificate template, exports PDFs, and mails them to respective students.",
    problem: "Manually designing, exporting, and emailing completion certificates for cohorts of 200+ students took up to 3 days of repetitive manual work per event, delaying delivery and leading to typing errors on credentials.",
    solution: "Engineered a Google Apps Script bulk automation tool. Connected a Google Forms registry sheet to a Slides template. On trigger execution, the script runs in batches, replaces name anchors, exports to PDF, uploads to a secure Drive folder, and sends a styled HTML email using GmailApp APIs.",
    features: [
      "Dynamic templating utilizing Slides mapping tags",
      "Automated PDF conversion and storage in Drive directories",
      "Custom HTML email template engine with name merge tags",
      "Transactional batch processing supporting up to 500 records",
      "Failure catch mechanism with status logging in Google Sheets"
    ],
    techStack: ["Google Apps Script", "Google Slides API", "Google Drive API", "Gmail Service", "JavaScript"],
    architecture: "Serverless execution within the Google Workspace environment, calling Workspace API endpoints asynchronously.",
    challenges: "Navigating Google's daily quota limitations (e.g., email quotas, execution run times of 6 minutes).",
    outcome: "Built an execution chunking algorithm that logs completed rows. If the limit is reached, it schedules a trigger to resume the process automatically. The system reduced manual efforts from 3 days to under 3 minutes, generating over 1,500 certificates with zero mistakes.",
  },
  {
    id: "progress-tracker",
    title: "Bank Aspirant Progress Tracker",
    client: "Personal Project",
    github: "https://github.com/Hari-2812/progress-tracker",
    liveUrl: "https://progress-tracker-one-phi.vercel.app",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A study and productivity application designed to help bank exam aspirants schedule a 90-day plan, track daily goals, and view visual streak analytics.",
    description: "A personal productivity hub constructed for competitive bank exam aspirants. It organizes a detailed 90-day preparation matrix into visual daily task lists, streaks, and progress dashboards.",
    problem: "Aspirants studying for bank exams frequently lose track of extensive syllabus items. Generic study planners lack specialized tracking for quantitative aptitude, reasoning, and banking awareness sections, causing students to fall behind on their timelines.",
    solution: "Built a customized tracking client using React, Firebase, and Tailwind CSS. The app implements a structured study syllabus, providing daily interactive checklists, visual task progress bars, and calendar logs that reward daily streaks to maintain study consistency.",
    features: [
      "Custom 90-Day Exam Checklist matching banking syllabi",
      "Streak tracking module with calendar activity mapping",
      "Interactive progress meters showing completion by category",
      "Session timer and customized daily notification updates",
      "Responsive design optimal for mobile-first study sessions"
    ],
    techStack: ["React 19", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore", "Framer Motion"],
    architecture: "Serverless client-side state synchronized to Firestore documents in real-time, matching user UID nodes.",
    challenges: "Creating a calendar grid showing consistent completion logs without complex date parsing libraries.",
    outcome: "Developed a custom lightweight date-utility mapping component in Vanilla JS that generates completion heatmaps, achieving rapid page rendering speeds and helping over 100+ daily active users structure their studies.",
  },
  {
    id: "analytics-avenue",
    title: "Analytics Avenue Landing Page",
    client: "Freelance Client Showcase",
    github: "https://github.com/Hari-2812/Analytics-Avenue",
    liveUrl: "https://analytics-avenue-sand.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A high-conversion landing page built with React and Tailwind CSS focusing on visual layout structure, speed, and premium styling.",
    description: "Designed and coded a corporate landing page showcasing SaaS analytics solutions. Built with a focus on web performance, accessibility, SEO metadata tags, and beautiful modern visual elements.",
    problem: "The client needed a digital presence to represent their business analytics services. Existing templates looked outdated, loaded slowly on mobile, and failed to communicate their product features.",
    solution: "Designed a clean, content-first landing page layout based on Stripe and Linear's design aesthetics. Implemented customized CSS gradients, responsive flex layouts, scroll animations, and optimized media assets to secure instant page load speeds.",
    features: [
      "Stunning Hero section featuring layout showcase mockups",
      "Clean feature grid with interactive hover illustrations",
      "Interactive pricing matrices supporting custom monthly toggle structures",
      "Responsive navigation panel configured for tablet and mobile viewports",
      "Lighthouse optimized layout scoring 100 on Best Practices"
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    architecture: "Single Page Application (SPA) designed with atomic reusable components. Custom CSS themes ensure fast rendering without overhead.",
    challenges: "Balancing smooth Framer Motion reveal animations without causing visual layout shifts (CLS) on slower mobile devices.",
    outcome: "Used CSS hardware acceleration and absolute dimensions for container wrappers. Delivered a premium marketing site with 99+ Lighthouse performance score, helping the client establish credibility.",
  }
];

export const timelineRoadmap = [
  {
    id: 1,
    year: "2026",
    title: "Freelance MERN Developer & Graduate",
    subtitle: "Techzon Wide & Academy Contracts",
    description: "Built custom Learning Management Systems (LMS), Customer Relationship Management (CRM) tools, and Google workspace automated scripting engines. Graduated with a B.E. in Computer Science & Engineering.",
    type: "freelance"
  },
  {
    id: 2,
    year: "2025",
    title: "IEEE Xtreme 19.0 Hackathon",
    subtitle: "University Rank 4",
    description: "Competed in the global 24-hour programming competition, solving complex algorithmic and mathematical problems. Ranked 4th at the University level.",
    type: "achievement"
  },
  {
    id: 3,
    year: "2024",
    title: "MERN Stack Specialist Certification",
    subtitle: "Advanced Web Engineering Focus",
    description: "Mastered building server-side REST APIs, MongoDB transaction schemas, JWT authentications, and stateful React interfaces.",
    type: "education"
  },
  {
    id: 4,
    year: "2023",
    title: "DSA Problem Solving Milestone",
    subtitle: "300+ Problems Solved",
    description: "Solved algorithmic challenges on LeetCode, HackerRank, and GeeksforGeeks, centering on arrays, linked lists, binary search trees, and dynamic programming.",
    type: "achievement"
  },
  {
    id: 5,
    year: "2022",
    title: "B.E. Computer Science & Engineering",
    subtitle: "Start of Academic Journey",
    description: "Began Bachelor of Engineering in Computer Science. Focused on OOP, database management systems, network protocols, and software design principles.",
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
