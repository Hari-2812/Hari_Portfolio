import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  ArrowRight, Mail, MapPin, Download, ExternalLink,
  Code, Server, Layers, Shield, Clock,
  CheckCircle, Send, ChevronRight, GraduationCap, Briefcase,
  Award, Globe, Database, Palette, Box, Sparkles, Cpu, Play, Terminal, HelpCircle, HardDrive, RefreshCw
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  personalInfo, achievements, skills, services, projects,
  timelineRoadmap, education
} from '../constants/portfolioData';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import Magnet from '../components/Magnet';

const sectionIds = ['hero', 'about', 'skills', 'services', 'projects', 'timeline', 'contact'];

export default function Home({ setActiveSection }) {
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState('overview');
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeStageIdx, setActiveStageIdx] = useState(4);
  const [formStatus, setFormStatus] = useState(null);

  // Custom Dashboard State variables for Hero
  const [activeHeroTab, setActiveHeroTab] = useState('status');
  const [dependencyStatus, setDependencyStatus] = useState('RESOLVED');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.15, rootMargin: '-90px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection]);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setFormStatus('success');
      reset();
      confetti({
        particleCount: 150,
        spread: 85,
        origin: { y: 0.85 },
        colors: ['#2563EB', '#7C3AED', '#059669', '#EA580C'],
      });
      setTimeout(() => setFormStatus(null), 5000);
    } catch (e) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Hari Prasath K | Premium Developer Studio & Product Engineer</title>
        <meta name="description" content="Portfolio of Hari Prasath K, a professional Freelance MERN Stack Developer building custom CRMs, LMS platforms, and Google Workspace automations." />
        <meta property="og:title" content="Hari Prasath K | Premium Developer Studio & Product Engineer" />
      </Helmet>

      {/* 1. HERO SECTION: DEVELOPER COMMAND CENTER */}
      <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center bg-bg-primary relative overflow-hidden grid-bg-lines">
        {/* Floating gradient lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Presentation & Pitch */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <ScrollReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-mono font-bold text-brand-blue">
                <span className="h-2 w-2 rounded-full bg-brand-emerald animate-ping" />
                SYSTEM_STATUS // ONLINE_FOR_HIRE
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary tracking-tight leading-tight">
                Architecting <br />
                <span className="text-brand-blue">Enterprise Web</span> <br />
                Systems & Tools.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm font-mono text-text-secondary leading-relaxed max-w-lg">
                I am Hari Prasath K, a full-stack product engineer. I partner with scaling startups and software studios to convert business goals into custom CRM panels, LMS applications, and operations workflows.
              </p>
            </ScrollReveal>

            {/* Availability Indicator Widget */}
            <ScrollReveal delay={0.2}>
              <div className="p-4 bg-bg-secondary/60 backdrop-blur border border-border-primary rounded-xl flex items-center justify-between gap-4 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center">
                    <CheckCircle size={18} />
                  </div>
                  <div className="text-left font-mono">
                    <h3 className="text-xs font-bold text-text-primary">Direct Intake Console</h3>
                    <p className="text-[10px] text-text-muted">Tickets processed daily</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold bg-brand-emerald/10 text-brand-emerald px-2 py-1 rounded">
                  EST_RESPONSE_12H
                </span>
              </div>
            </ScrollReveal>

            {/* Call to Actions */}
            <ScrollReveal delay={0.25} className="flex flex-wrap gap-4">
              <Magnet>
                <a href="#projects" className="magnetic-attract bg-brand-blue hover:bg-brand-blue/95 text-white px-6 py-3 rounded-full text-xs font-bold font-mono uppercase tracking-wider inline-flex items-center gap-2 shadow-premium transition-transform hover:scale-102">
                  Launch Lab Console <ArrowRight size={14} />
                </a>
              </Magnet>
              <Magnet>
                <a href="#contact" className="magnetic-attract border border-border-primary hover:bg-bg-secondary text-text-primary px-6 py-3 rounded-full text-xs font-bold font-mono tracking-wider uppercase transition-colors">
                  Initialize ticket
                </a>
              </Magnet>
            </ScrollReveal>
          </div>

          {/* Interactive Developer Panel Dashboard */}
          <div className="lg:col-span-6 w-full">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="developer-console-frame text-left console-hover" data-cursor-text="exec_">
                <div className="developer-console-header">
                  <div className="console-actions-dots">
                    <span className="console-dot console-dot-close" />
                    <span className="console-dot console-dot-minimize" />
                    <span className="console-dot console-dot-maximize" />
                  </div>
                  <span className="text-[10px] text-text-muted font-mono">hari_prasath_terminal.exe</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-blue/20" />
                </div>
                
                {/* Console tabs */}
                <div className="flex bg-[#161b22] border-b border-[#21262d] font-mono text-[10px] text-text-muted">
                  <button 
                    onClick={() => setActiveHeroTab('status')}
                    className={`px-4 py-2 border-r border-[#21262d] transition-colors ${
                      activeHeroTab === 'status' ? 'bg-[#0d1117] text-brand-blue font-bold' : 'hover:bg-[#0d1117]'
                    }`}
                  >
                    STATUS_LOGS
                  </button>
                  <button 
                    onClick={() => setActiveHeroTab('dependencies')}
                    className={`px-4 py-2 border-r border-[#21262d] transition-colors ${
                      activeHeroTab === 'dependencies' ? 'bg-[#0d1117] text-brand-purple font-bold' : 'hover:bg-[#0d1117]'
                    }`}
                  >
                    DEPENDENCY_TREE
                  </button>
                  <button 
                    onClick={() => setActiveHeroTab('git')}
                    className={`px-4 py-2 transition-colors ${
                      activeHeroTab === 'git' ? 'bg-[#0d1117] text-brand-orange font-bold' : 'hover:bg-[#0d1117]'
                    }`}
                  >
                    GIT_STATS
                  </button>
                </div>

                <div className="developer-console-body min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeHeroTab === 'status' && (
                      <motion.div
                        key="status"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-3 font-mono text-xs text-[#c9d1d9]"
                      >
                        <p className="text-text-muted">// System check executed successfully</p>
                        <p className="flex items-center gap-2"><span className="text-brand-emerald">✓</span> Engine: MERN stack framework active</p>
                        <p className="flex items-center gap-2"><span className="text-brand-emerald">✓</span> Performance: 99% Lighthouse index verified</p>
                        <p className="flex items-center gap-2"><span className="text-brand-emerald">✓</span> Databases: MongoDB transaction layers connected</p>
                        <p className="flex items-center gap-2"><span className="text-brand-emerald">✓</span> Algorithms: 300+ DSA modules compiled</p>
                      </motion.div>
                    )}

                    {activeHeroTab === 'dependencies' && (
                      <motion.div
                        key="dependencies"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-2 font-mono text-xs text-[#c9d1d9]"
                      >
                        <p className="text-text-muted">// App dependency tree compiler</p>
                        <div className="p-3 bg-[#161b22] border border-[#21262d] rounded flex items-center justify-between">
                          <span>Razorpay Checkout Integration</span>
                          <span className="text-brand-emerald font-bold">{dependencyStatus}</span>
                        </div>
                        <div className="p-3 bg-[#161b22] border border-[#21262d] rounded flex items-center justify-between">
                          <span>Google Sheets Automation (GAS)</span>
                          <span className="text-brand-emerald font-bold">RESOLVED</span>
                        </div>
                        <div className="p-3 bg-[#161b22] border border-[#21262d] rounded flex items-center justify-between">
                          <span>Meta WhatsApp Cloud integration</span>
                          <span className="text-brand-emerald font-bold">RESOLVED</span>
                        </div>
                      </motion.div>
                    )}

                    {activeHeroTab === 'git' && (
                      <motion.div
                        key="git"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-3 font-mono text-xs text-[#c9d1d9]"
                      >
                        <p className="text-text-muted">// Git repository index state</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-[#161b22] border border-[#21262d] rounded">
                            <span className="text-[10px] text-text-muted block">BRANCH_NAME</span>
                            <span className="font-bold text-brand-orange">main</span>
                          </div>
                          <div className="p-3 bg-[#161b22] border border-[#21262d] rounded">
                            <span className="text-[10px] text-text-muted block">TOTAL_COMMIT_COUNT</span>
                            <span className="font-bold text-brand-blue">142+ commits</span>
                          </div>
                        </div>
                        <p className="text-text-muted text-[10px]">hash // be54dae0569bc7438de37cce4</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. PROFILE SECTION: STORYTELLING SYSTEM SUMMARY */}
      <section id="about" className="py-24 bg-bg-secondary border-t border-border-primary grid-bg-dots">
        <div className="section-container text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Header Identity details */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <span className="text-[10px] font-mono text-brand-blue font-bold uppercase tracking-wider">
                  01 // Developer Profile
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight mt-2">
                  Solving complex business challenges through pragmatic engineering.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I design software to resolve real-world operations issues. With a Bachelor of Engineering in Computer Science and Engineering, I combine structured computer systems foundations—like database normalization, search algorithms, and access middleware—with professional MERN stack freelancing.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="p-5 bg-bg-primary border border-border-primary rounded-xl italic font-serif text-text-primary text-base">
                  "I build with a simple rule: create clean database configurations, secure controller routing frameworks, and modular, fast UI panels that work seamlessly."
                </div>
              </ScrollReveal>
            </div>

            {/* Action Mindset Blocks */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal direction="left" className="p-6 bg-bg-primary border border-border-primary rounded-xl space-y-3 shadow-card">
                <h3 className="font-mono text-xs font-bold text-brand-purple uppercase tracking-wider">// System Security Mindset</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  I write secure JWT-based route access controls with hierarchical Role-Based Access Control (RBAC), preventing unauthorized access points.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1} className="p-6 bg-bg-primary border border-border-primary rounded-xl space-y-3 shadow-card">
                <h3 className="font-mono text-xs font-bold text-brand-orange uppercase tracking-wider">// Optimized Databases</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  I optimize MongoDB systems by indexing search paths, writing performant aggregate queries, and using schema checks to verify parameters.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION: TECHNOLOGY ARCHITECTURE MAP */}
      <section id="skills" className="py-24 bg-bg-primary border-t border-border-primary grid-bg-lines">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-blue font-bold uppercase tracking-wider">
              02 // Infrastructure Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight mt-2 mb-12">
              Technology Architecture Map
            </h2>
          </ScrollReveal>

          {/* Map layout grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layers selector */}
            <div className="lg:col-span-4 space-y-2 font-mono">
              {[
                { id: 'frontend', name: 'UI / Presentation Layer' },
                { id: 'backend', name: 'Logic Controller Layer' },
                { id: 'database', name: 'Database Model Layer' },
                { id: 'integrations', name: 'Integration Matrix Layer' },
                { id: 'tools', name: 'Environment / DevOps Layer' }
              ].map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveSkillCategory(layer.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex justify-between items-center ${
                    activeSkillCategory === layer.id
                      ? 'bg-bg-secondary border-brand-blue text-brand-blue border-l-4 border-l-brand-blue shadow-premium font-extrabold'
                      : 'bg-transparent border-border-primary/50 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span>{layer.name}</span>
                  {activeSkillCategory === layer.id && <Play size={10} className="text-brand-blue fill-brand-blue shrink-0" />}
                </button>
              ))}
            </div>

            {/* Architecture Node Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-secondary border border-border-primary rounded-2xl shadow-premium space-y-6"
                >
                  <div className="flex justify-between items-center border-b border-border-primary pb-4 font-mono text-[10px]">
                    <span className="text-text-muted">// LAYER NODE SUMMARY</span>
                    <span className="text-brand-blue font-bold">{activeSkillCategory.toUpperCase()} COMPACT LIST</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills[activeSkillCategory]?.map((skill) => (
                      <div key={skill.name} className="p-5 bg-bg-primary/50 border border-border-primary rounded-xl space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-xs text-text-primary font-mono">{skill.name}</h4>
                          <span className="text-[10px] font-mono font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
                            {skill.level}%
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">{skill.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {skill.related.map((rel) => (
                            <span key={rel} className="text-[9px] font-mono font-semibold bg-bg-secondary border border-border-primary text-text-secondary px-2 py-0.5 rounded">
                              {rel}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION: SOFTWARE AGENCY WORKFLOW */}
      <section id="services" className="py-24 bg-bg-secondary border-t border-border-primary grid-bg-dots">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-blue font-bold uppercase tracking-wider">
              03 // Software Agency Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight mt-2 mb-12">
              Services & Value Delivery
            </h2>
          </ScrollReveal>

          {/* Matrix Flow Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* List selectors */}
            <div className="lg:col-span-4 space-y-2">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 font-mono ${
                    activeServiceIdx === idx
                      ? 'bg-bg-primary border-brand-blue border-l-4 border-l-brand-blue shadow-premium'
                      : 'bg-bg-secondary border-border-primary/85 hover:border-border-primary'
                  }`}
                >
                  <span className="text-[9px] text-text-muted">SYSTEM_PILLAR 0{idx + 1}</span>
                  <h3 className="text-xs font-bold text-text-primary tracking-tight">{service.title}</h3>
                </button>
              ))}
            </div>

            {/* Dynamic Value Flow Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-primary border border-border-primary rounded-2xl space-y-6"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-border-primary">
                    <div>
                      <span className="font-mono text-[9px] text-brand-blue font-bold uppercase">SERVICE SPECIFICATION</span>
                      <h3 className="font-heading font-black text-lg text-text-primary mt-0.5">{services[activeServiceIdx].title}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                    <div className="p-4 bg-bg-secondary border border-border-primary rounded-xl space-y-2">
                      <h4 className="font-bold text-brand-orange uppercase">// Target Problem</h4>
                      <p className="text-text-secondary leading-relaxed">{services[activeServiceIdx].shortDescription}</p>
                    </div>

                    <div className="p-4 bg-bg-secondary border border-border-primary rounded-xl space-y-2">
                      <h4 className="font-bold text-brand-emerald uppercase">// System Outcome</h4>
                      <p className="text-text-secondary leading-relaxed">{services[activeServiceIdx].deliverables}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <h4 className="font-mono text-[10px] font-bold text-text-primary uppercase tracking-wider">Key Functional Modules</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {services[activeServiceIdx].features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle size={13} className="text-brand-emerald shrink-0 mt-0.5" />
                          <span className="text-text-secondary leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-primary flex flex-wrap justify-between items-center gap-4">
                    <div className="flex flex-wrap gap-1">
                      {services[activeServiceIdx].techUsed.map((tech) => (
                        <span key={tech} className="text-[9px] font-mono font-bold bg-bg-secondary border border-border-primary text-text-primary px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="bg-text-primary text-bg-primary px-4 py-2 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider transition-opacity hover:opacity-90"
                    >
                      Initialize Consultation →
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION: PRODUCT ENGINEERING LAB */}
      <section id="projects" className="py-24 bg-bg-primary border-t border-border-primary grid-bg-lines">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-blue font-bold uppercase tracking-wider">
              04 // Engineering Sandbox
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight mt-2 mb-12">
              Product Engineering Lab
            </h2>
          </ScrollReveal>

          {/* Directory style navigation split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left explorer folder list */}
            <div className="lg:col-span-4 space-y-2 font-mono">
              <div className="text-[10px] text-text-muted uppercase border-b border-border-primary pb-2 mb-3">
                REPOSITORY_DIRECTORY
              </div>
              {projects.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProjectIdx(idx);
                    setActiveProjectTab('overview');
                  }}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                    activeProjectIdx === idx
                      ? 'bg-bg-secondary border-brand-blue text-brand-blue border-l-4 border-l-brand-blue shadow-premium font-extrabold'
                      : 'bg-transparent border-border-primary/45 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span className="truncate">{project.title}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${project.liveUrl !== '#' ? 'bg-brand-emerald' : 'bg-brand-orange'}`} />
                </button>
              ))}
            </div>

            {/* System detail console */}
            <div className="lg:col-span-8">
              {(() => {
                const project = projects[activeProjectIdx];
                if (!project) return null;
                return (
                  <ScrollReveal key={project.id}>
                    <div className="bg-bg-secondary border border-border-primary rounded-2xl overflow-hidden shadow-premium">
                      {/* Browser Mockup bar */}
                      <div className="p-6 bg-bg-primary border-b border-border-primary flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-brand-blue font-bold uppercase">{project.client}</span>
                            <span className="text-[8px] font-mono bg-brand-emerald/10 text-brand-emerald px-1.5 py-0.5 rounded font-bold">
                              PRODUCTION_DEPLOYED
                            </span>
                          </div>
                          <h3 className="font-heading font-black text-xl lg:text-2xl text-text-primary mt-1">{project.title}</h3>
                        </div>

                        <div className="flex gap-2">
                          {project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border border-border-primary hover:bg-bg-secondary text-text-primary text-[10px] font-mono font-bold px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5 transition-colors"
                            >
                              <FaGithub size={12} /> Source
                            </a>
                          )}
                          {project.liveUrl !== '#' && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-text-primary text-bg-primary text-[10px] font-mono font-bold px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5 transition-opacity hover:opacity-90"
                            >
                              Launch <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Content panel sub tabs */}
                      <div className="flex gap-2 px-6 pt-4 border-b border-border-primary font-mono text-[10px]">
                        {[
                          { id: 'overview', label: '01 / Specifications' },
                          { id: 'architecture', label: '02 / System Modules' },
                          { id: 'engineering', label: '03 / Engineering Log' }
                        ].map(t => (
                          <button
                            key={t.id}
                            onClick={() => setActiveProjectTab(t.id)}
                            className={`px-3 py-2 border-t-2 border-transparent transition-all cursor-pointer uppercase tracking-wider font-semibold ${
                              activeProjectTab === t.id
                                ? 'text-brand-blue border-t-brand-blue bg-bg-primary/50 font-extrabold'
                                : 'text-text-secondary hover:text-brand-blue'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>

                      {/* Details Content */}
                      <div className="p-6 space-y-6">
                        <AnimatePresence mode="wait">
                          {activeProjectTab === 'overview' && (
                            <motion.div
                              key="overview"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4 text-xs"
                            >
                              <p className="text-text-secondary leading-relaxed text-left">{project.description}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-left">
                                <div className="p-4 bg-bg-primary rounded-xl border border-border-primary">
                                  <h5 className="font-bold text-brand-orange uppercase">// Operational Bottleneck</h5>
                                  <p className="text-text-secondary leading-relaxed mt-1">{project.problem}</p>
                                </div>
                                <div className="p-4 bg-bg-primary rounded-xl border border-border-primary">
                                  <h5 className="font-bold text-brand-emerald uppercase">// System Outcome</h5>
                                  <p className="text-text-secondary leading-relaxed mt-1">{project.solution}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {activeProjectTab === 'architecture' && (
                            <motion.div
                              key="architecture"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4 text-xs"
                            >
                              <div className="p-4 bg-bg-primary border border-border-primary rounded-xl text-left">
                                <h4 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                                  Database & Model Layer Flow
                                </h4>
                                <p className="text-text-secondary leading-relaxed mb-4">{project.architecture}</p>
                                
                                <div className="p-4 bg-bg-secondary rounded border border-border-primary/80 font-mono text-[9px] text-text-secondary space-y-2 select-none">
                                  <div className="flex justify-between items-center bg-bg-primary px-3 py-2 rounded">
                                    <span className="font-bold text-brand-blue">CLIENT VIEW TIER</span>
                                    <span>React 19 single page application module</span>
                                  </div>
                                  <div className="text-center text-text-muted my-1">↓ API Requests</div>
                                  <div className="flex justify-between items-center bg-bg-primary px-3 py-2 rounded">
                                    <span className="font-bold text-brand-purple">MIDDLEWARE JWT AUTH TIER</span>
                                    <span>Verify tokens and RBAC roles parameters</span>
                                  </div>
                                  <div className="text-center text-text-muted my-1">↓ Indexed Query</div>
                                  <div className="flex justify-between items-center bg-bg-primary px-3 py-2 rounded">
                                    <span className="font-bold text-brand-emerald">DATA STRUCTURE REPOSITORY</span>
                                    <span>MongoDB aggregate schemas</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {activeProjectTab === 'engineering' && (
                            <motion.div
                              key="engineering"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4 font-mono text-xs text-left"
                            >
                              <div className="p-4 bg-brand-orange/5 text-text-secondary border-l-4 border-l-brand-orange rounded-r-xl">
                                <h5 className="font-bold text-text-primary uppercase flex items-center gap-1.5 mb-1">
                                  engineering_challenge.log
                                </h5>
                                <p className="leading-relaxed">{project.challenges}</p>
                              </div>

                              <div className="p-4 bg-brand-emerald/5 text-text-secondary border-l-4 border-l-brand-emerald rounded-r-xl">
                                <h5 className="font-bold text-text-primary uppercase flex items-center gap-1.5 mb-1">
                                  resolution_status.log
                                </h5>
                                <p className="leading-relaxed">{project.outcome}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Interactive Spotlight Preview Mockup */}
                        <div className="pt-4 border-t border-border-primary/50">
                          <div className="project-window-spotlight rounded-xl overflow-hidden border border-border-primary relative cursor-pointer" data-cursor-text="view_">
                            <div className="bg-bg-primary px-3 py-2 border-b border-border-primary flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              <span className="text-[8px] font-mono text-text-muted ml-2">
                                {project.liveUrl !== '#' ? project.liveUrl : 'localhost:5173'}
                              </span>
                            </div>
                            <div className="aspect-video w-full overflow-hidden bg-bg-primary">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Technology tags */}
                        <div className="flex flex-wrap gap-1 font-mono text-[9px] pt-2">
                          {project.techStack.map(tech => (
                            <span key={tech} className="bg-bg-primary border border-border-primary text-text-secondary px-2.5 py-0.5 rounded font-bold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 6. JOURNEY SECTION: DEVELOPER EVOLUTION SYSTEM */}
      <section id="timeline" className="py-24 bg-bg-secondary border-t border-border-primary grid-bg-dots">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-blue font-bold uppercase tracking-wider">
              05 // Evolution milestones
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight mt-2 mb-12">
              Evolutionary Path
            </h2>
          </ScrollReveal>

          {/* Stepper split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left timeline selectors */}
            <div className="lg:col-span-4 space-y-2 font-mono">
              {timelineRoadmap.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl border text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                    activeStageIdx === idx
                      ? 'bg-bg-primary border-brand-blue text-brand-blue border-l-4 border-l-brand-blue shadow-premium font-extrabold'
                      : 'bg-transparent border-border-primary/45 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span>{item.year} // {item.title.split(' ')[0]}</span>
                  <span className="text-[10px] text-brand-blue">{item.type.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Right log viewer details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStageIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-primary border border-border-primary rounded-2xl space-y-4 text-left"
                >
                  <div className="flex justify-between items-center border-b border-border-primary pb-3 font-mono text-xs">
                    <span className="text-text-muted">// EXPERIENCE RECORD</span>
                    <span className="text-brand-blue font-bold">{timelineRoadmap[activeStageIdx].year}</span>
                  </div>

                  <h3 className="font-heading font-black text-xl text-text-primary">
                    {timelineRoadmap[activeStageIdx].title}
                  </h3>
                  <h4 className="font-mono text-xs text-text-muted uppercase">
                    {timelineRoadmap[activeStageIdx].subtitle}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed pt-2">
                    {timelineRoadmap[activeStageIdx].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION: START A PROJECT CONSOLE */}
      <section id="contact" className="py-24 bg-bg-primary border-t border-border-primary grid-bg-lines">
        <div className="section-container text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Onboarding text metrics */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <span className="text-[10px] font-mono text-brand-blue font-bold uppercase tracking-wider">
                  06 // Start a Project Console
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight mt-2">
                  Initialize Consultation Ticket
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-xs text-text-secondary leading-relaxed font-mono">
                  Input project credentials below to write configuration parameters. Together, we'll verify requirements, estimate scope limits, and build system architectures.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="space-y-3 font-mono text-xs text-text-secondary">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-brand-blue" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-brand-blue" />
                  <span>{personalInfo.location}</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Console ticket setup */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={0.2} className="p-8 bg-bg-secondary border border-border-primary rounded-2xl shadow-premium">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-text-primary mb-1">visitor_name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register('name', { required: 'Name parameter required' })}
                        className="w-full bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 outline-none focus:border-brand-blue text-text-primary"
                      />
                      {errors.name && <p className="text-brand-orange text-[9px] mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-text-primary mb-1">visitor_email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        {...register('email', { 
                          required: 'Email parameter required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email syntax' }
                        })}
                        className="w-full bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 outline-none focus:border-brand-blue text-text-primary"
                      />
                      {errors.email && <p className="text-brand-orange text-[9px] mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-text-primary mb-1">project_specifications</label>
                    <textarea
                      rows="4"
                      placeholder="Input scope metrics, payment system needs, dashboard criteria, or script automations details..."
                      {...register('message', { required: 'Message body parameter required' })}
                      className="w-full bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 outline-none focus:border-brand-blue text-text-primary resize-none"
                    />
                    {errors.message && <p className="text-brand-orange text-[9px] mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue hover:bg-brand-blue/95 text-white font-bold uppercase tracking-wider py-3 rounded-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5 shadow-card"
                  >
                    {isSubmitting ? 'INITIALIZING...' : 'EXECUTE_SEND'} <Send size={12} />
                  </button>

                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="p-3 bg-brand-emerald/10 border border-brand-emerald text-brand-emerald rounded-lg text-center text-[10px]"
                      >
                        [SUCCESS] Ticket initialized. Hari Prasath will contact you shortly.
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="p-3 bg-brand-orange/10 border border-brand-orange text-brand-orange rounded-lg text-center text-[10px]"
                      >
                        [ERROR] Execution failed. Verify credentials and try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
