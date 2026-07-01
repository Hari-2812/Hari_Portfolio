import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, ExternalLink, Code, Layers, ShieldCheck, 
  Settings, CheckCircle, AlertTriangle, TrendingUp, Cpu
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../constants/portfolioData';
import ScrollReveal from '../components/ScrollReveal';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center pt-24 pb-12">
        <h1 className="text-2xl font-black text-text-primary mb-4">Case Study Not Found</h1>
        <p className="text-sm text-text-secondary mb-8">The project you are looking for does not exist or has been relocated.</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — Case Study | Hari Prasath K</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <main className="bg-bg-primary pt-24 pb-20 overflow-hidden">
        {/* Back Link */}
        <div className="section-container mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-brand transition-colors"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section-container mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="section-label">Case Study</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-text-primary tracking-tight leading-tight mt-3 mb-6">
                {project.title}
              </h1>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                {project.github !== '#' && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline text-xs"
                  >
                    <FaGithub size={16} /> Repository
                  </a>
                )}
                {project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary text-xs"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Premium Mockup Visualizer */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right">
                <div className="relative rounded-2xl overflow-hidden border border-border-primary shadow-premium group">
                  <div className="bg-bg-secondary px-4 py-2 border-b border-border-primary flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                    <span className="text-[10px] font-mono text-text-muted ml-4 select-none">
                      {project.liveUrl !== '#' ? project.liveUrl : 'localhost:5173'}
                    </span>
                  </div>
                  <div className="aspect-video relative overflow-hidden bg-bg-tertiary">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="section-container py-12 border-t border-border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Meta statistics */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4 flex items-center gap-1.5 font-heading">
                  <Cpu size={14} className="text-brand" /> Project Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted">Client / Context</span>
                    <p className="text-sm font-semibold text-text-secondary">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted">Role</span>
                    <p className="text-sm font-semibold text-text-secondary">Lead Developer</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted">Database Engine</span>
                    <p className="text-sm font-semibold text-text-secondary">MongoDB (NoSQL) / Local Scripts</p>
                  </div>
                </div>
              </div>

              {/* Technologies card */}
              <div className="card p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4 flex items-center gap-1.5 font-heading">
                  <Code size={14} className="text-brand" /> Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge bg-brand-light text-brand border-brand/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem & Solution details */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="card p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2 font-heading">
                    <AlertTriangle size={18} className="text-amber" /> The Business Problem
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {project.problem}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="card p-8 border-l-4 border-l-brand">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2 font-heading">
                    <CheckCircle size={18} className="text-emerald" /> The Solution
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {project.solution}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features & Architecture */}
        <section className="bg-bg-secondary border-y border-border-primary py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Features list */}
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <h2 className="text-xl font-bold font-heading text-text-primary tracking-tight mb-6">
                    Core Functionality & Deliverables
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-md bg-emerald-light text-emerald flex items-center justify-center flex-shrink-0 text-xs">
                          ✓
                        </span>
                        <p className="text-xs text-text-secondary leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Architecture diagram card */}
              <div className="lg:col-span-5">
                <ScrollReveal direction="left">
                  <div className="card p-8 bg-bg-primary">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2 font-heading">
                      <Layers size={15} className="text-brand" /> Architecture & Data Layer
                    </h3>
                    <p className="text-xs leading-relaxed text-text-muted mb-6">
                      {project.architecture}
                    </p>
                    <div className="border border-border-primary rounded-lg p-4 bg-bg-secondary font-mono text-[10px] text-text-secondary space-y-2 select-none">
                      <div className="flex justify-between items-center bg-bg-tertiary px-2 py-1.5 rounded">
                        <span className="text-brand">Client Tier:</span>
                        <span>React Single Page Application</span>
                      </div>
                      <div className="text-center text-text-muted my-1">↓ (HTTPS REST / JSON)</div>
                      <div className="flex justify-between items-center bg-bg-tertiary px-2 py-1.5 rounded">
                        <span className="text-emerald">Controller Router:</span>
                        <span>Express Server Route Middleware</span>
                      </div>
                      <div className="text-center text-text-muted my-1">↓ (JWT Checks / Indexes)</div>
                      <div className="flex justify-between items-center bg-bg-tertiary px-2 py-1.5 rounded">
                        <span className="text-purple">Database Storage:</span>
                        <span>Mongoose Schemas</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Results */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8 bg-bg-secondary">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2 font-heading">
                <Settings size={18} className="text-brand" /> Critical Challenges Resolved
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {project.challenges}
              </p>
            </div>
            
            <div className="card p-8 bg-bg-secondary border-t-4 border-t-emerald">
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2 font-heading">
                <TrendingUp size={18} className="text-emerald" /> Business & Operational Outcomes
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {project.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation Action */}
        <section className="section-container text-center pt-8 border-t border-border-primary">
          <Link to="/" className="btn btn-outline text-xs">
            <ArrowLeft size={14} /> Back to Case Studies
          </Link>
        </section>
      </main>
    </>
  );
}
