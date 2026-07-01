# Hari Prasath K – Premium Freelance MERN Stack Developer Portfolio

A world-class, premium, modern, and SEO-optimized software engineering portfolio built to resemble a high-end B2B SaaS consultancy product. 

**Live Demo URL**: [https://hari-portfolio.vercel.app/](https://hari-portfolio.vercel.app/)

---

## 🛠 Technology Integration Stack

- **Core Engine**: React 19 + Vite (Speed optimized bundling)
- **Styling Utility**: Tailwind CSS
- **Micro-Animations**: Framer Motion (Smooth transitions, tab switches, and fades)
- **Routing Engine**: React Router DOM (Dynamic case studies sub-routing)
- **Forms Controller**: React Hook Form
- **SEO Optimization**: React Helmet Async (Custom page metadata, Open Graph cards, canonical structures)
- **Components & Icons**: Lucide React + React Icons

---

## 🚀 Key Architectural Features

1. **Brand Identity & Design System**: 
   - Light-first modern aesthetic featuringOutfit & Sora typography weights.
   - Harmonic Slate/Gray scale backgrounds accented with custom Indigo violet primaries.
   - Smooth custom spring-based cursor interactions on non-touch devices.
2. **Interactive Developer Workspace (Projects Section)**:
   - Sidebar file explorer directories representing active repositories.
   - Console workspace showcasing:
     - **Overview & Impact**: Descriptive abstracts, operational challenges, and client business outcomes.
     - **Architecture & System Design**: Schema flows and challenges overcome.
     - **Metrics & Capabilities**: Granular deliverables checklists and technology matrices.
   - Embedded browser previews with address headers.
3. **Software Consultancy Services Explorer**:
   - Tab-based consultancy options detailing LMS solutions, CRM setups, REST API modules, and web automation tools.
   - Interactive 6-stage development lifecycle roadmap.
4. **Interactive Development Journey (Evolution Roadmap)**:
   - Stage-by-stage progression tracing years 2022 to 2026.
   - Mastered technologies lists and visual engineering cycle indicators (Learn → Build → Test → Improve → Deploy).
5. **SEO & Accessibility Audited**:
   - Programmed with dynamic page meta configurations.
   - Integrated semantic `<footer>`, `<header>`, and `<section>` partitions.
   - Accessible keyboard-friendly targets and tooltips.

---

## 📁 Repository Directory Structure

```text
├── public/
│   ├── favicon.svg      # Branding vector favicon
│   ├── robots.txt       # Search crawler directions
│   └── sitemap.xml      # SEO routing index map
├── src/
│   ├── components/      # Modular UI components (Cursor, Magnet, ScrollReveal, Footer, etc.)
│   ├── constants/       # Global static parameters (Portfolio data matrix)
│   ├── pages/           # Page routes (Home and detailed case study ProjectDetail views)
│   ├── App.jsx          # Router paths & state provider wrappers
│   ├── main.jsx         # Hydration entrypoint
│   └── index.css        # Core tailwind setup & design system typography
├── vercel.json          # SPA router fallback redirection rules
├── vite.config.js       # Vite build setup with tailwind v4 plugins
└── package.json         # Module declarations
```

---

## ⚙️ Local Setup Instructions

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation Steps
1. Clone this repository locally:
   ```bash
   git clone https://github.com/your-username/hari-portfolio.git
   cd hari-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. Build production bundle:
   ```bash
   npm run build
   ```
   Compiled static assets will be outputted to `/dist`.

---

## 🚀 Production Deployment Checklist

### Vercel Deployment
1. Import repository to Vercel.
2. Select **Vite** preset.
3. Keep default settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Set environment variables if needed.
5. Deploy. (Routing fallbacks are resolved dynamically via `vercel.json` rewrites).

### Render Deployment (Optional API/Backend)
- For this frontend-only showcase, the contact form uses structured states. If a mail server API is required in the future, it can be deployed to Render using a simple Express handler with CORS policies.

---

## 🤝 Collaboration & Inquiries

Developed and designed with precision by **Hari Prasath K**. Reach out for freelancing contracts or development roles:
- **Email**: prasathhari582@gmail.com
- **LinkedIn**: [Hari Prasath K](https://linkedin.com/)
- **WhatsApp**: [Chat Link](https://wa.me/)
