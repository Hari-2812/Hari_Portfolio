import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  ArrowRight, Mail, MapPin, Download, ExternalLink,
  Code, Server, Layers, Shield, Clock,
  CheckCircle, Send, ChevronRight, GraduationCap, Briefcase,
  Award, Globe, Database, Palette, Box, Sparkles, AlertCircle, Cpu, Play
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Scrollspy active sections
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
        particleCount: 120,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#3B82F6', '#10B981', '#F97316', '#8B5CF6'],
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
        <title>Hari Prasath K | Product Engineer & Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Hari Prasath K, a professional Freelance MERN Stack Developer building custom CRMs, LMS platforms, and Google Workspace automations." />
        <meta property="og:title" content="Hari Prasath K | Product Engineer & Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Hari Prasath K, a professional Freelance MERN Stack Developer building custom CRMs, LMS platforms, and Google Workspace automations." />
      </Helmet>

      {/* 1. HERO SECTION: DIGITAL WORKSPACE */}
      <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center bg-bg-primary relative overflow-hidden">
        <div className="section-container w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-secondary border border-border-primary text-xs font-mono font-semibold text-text-primary">
                <span className="h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
                AVAILABILITY // OPEN_FOR_CONTRACTS
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-text-primary tracking-tight leading-tight">
                Engineering <br />
                <span className="italic font-serif text-accent-blue">Digital Products</span> <br />
                with MERN Stack.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm font-mono text-text-secondary leading-relaxed max-w-xl">
                I am Hari Prasath K, a product-focused software engineer. I design clean database schemas, secure role-based API backends, and modular frontends to resolve real-world business bottlenecks.
              </p>
            </ScrollReveal>

            {/* Quick stats ecosystem */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-3 gap-4 py-4 max-w-lg border-t border-b border-border-primary/80 font-mono">
                <div>
                  <p className="text-xs text-text-muted">DELIVERED</p>
                  <p className="text-xl font-bold text-text-primary">5+ SaaS Apps</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">ALGORITHMS</p>
                  <p className="text-xl font-bold text-text-primary">300+ DSA</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted">CGPA</p>
                  <p className="text-xl font-bold text-text-primary">8.05</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="flex flex-wrap gap-4">
              <Magnet>
                <a href="#projects" className="bg-text-primary text-bg-primary px-5 py-3 rounded-md text-xs font-bold font-mono uppercase tracking-wider inline-flex items-center gap-2 transition-opacity hover:opacity-90">
                  Explore Products <ArrowRight size={14} />
                </a>
              </Magnet>
              <Magnet>
                <a href="#contact" className="border border-border-primary hover:bg-bg-secondary text-text-primary px-5 py-3 rounded-md text-xs font-bold font-mono tracking-wider uppercase transition-colors">
                  Consultation
                </a>
              </Magnet>
            </ScrollReveal>
          </div>

          {/* Software Dashboard Console */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="terminal-window terminal-hover text-left" data-cursor-text="system_">
                <div className="terminal-header">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="text-[10px] text-text-muted font-mono ml-4">hari_prasath_studio.sh</span>
                </div>
                <div className="terminal-body font-mono space-y-4">
                  <div className="space-y-1">
                    <p className="text-text-muted">// Current Stack Architecture</p>
                    <p className="text-accent-blue">const developer = {`{`}</p>
                    <p className="pl-4 text-text-secondary">name: 'Hari Prasath K',</p>
                    <p className="pl-4 text-text-secondary">focus: ['LMS', 'CRM', 'API_Design', 'Automations'],</p>
                    <p className="pl-4 text-text-secondary">primary: 'MongoDB, Express, React, Node.js',</p>
                    <p className="pl-4 text-text-secondary">metrics: {`{ DSA: 300, Projects: 5, CGPA: 8.05 }`}</p>
                    <p className="text-accent-blue">{`};`}</p>
                  </div>
                  <div className="border-t border-border-primary/30 pt-3">
                    <p className="text-accent-emerald">visitor@hari_studio:~$ ./run_lighthouse.sh</p>
                    <p className="text-text-secondary">Lighthouse Audits: Performance [99%] | SEO [100%]</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION: MAGAZINE STORYLAYOUT */}
      <section id="about" className="py-24 bg-bg-secondary border-t border-border-primary">
        <div className="section-container text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Story Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider">
                  01 // Engineering Philosophy
                </span>
                <h2 className="text-3xl md:text-5xl font-black font-heading text-text-primary tracking-tight leading-tight mt-2">
                  Building software to resolve tangible operational bottlenecks.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I don't just write syntax. I approach software development as a product engineer. 
                  My academic credentials (B.E. in Computer Science) provide me with solid foundations in algorithmic space-time complexity, index optimizations, and database relationships. 
                  I pair this academic rigor with professional freelance contracts, helping startups and service businesses launch robust digital products.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <blockquote className="border-l-4 border-accent-blue pl-4 py-2 italic font-heading text-text-primary text-lg">
                  "The best code is not the most complex, but the most readable system that addresses the operational challenge with zero overhead."
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Layout highlights */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="right" className="p-6 bg-bg-primary border border-border-primary rounded-lg space-y-4">
                <h3 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">How I Think</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  I design databases schema-first, verify payment lifecycles out-of-band using webhook verification keys, and write secure, middleware-driven JWT route structures to safeguard systems.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1} className="p-6 bg-bg-primary border border-border-primary rounded-lg space-y-4">
                <h3 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">Why Work With Me</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Clients replace spreadsheet clutter with centralized, automated administrative pipelines. By automating manual certificate generations and course signups, manual administrative workload drops by up to 95%.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION: DEVELOPER ECOSYSTEM MAP */}
      <section id="skills" className="py-24 bg-bg-primary border-t border-border-primary">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider">
              02 // Technical Infrastructure Map
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-text-primary tracking-tight leading-tight mt-2 mb-12">
              System Architecture Ecosystem
            </h2>
          </ScrollReveal>

          {/* Map Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Layers Selector */}
            <div className="lg:col-span-4 space-y-2 font-mono">
              {[
                { key: 'frontend', name: '01 / UI View Layer' },
                { key: 'backend', name: '02 / Logic Controller Layer' },
                { key: 'database', name: '03 / Data Modeling Layer' },
                { key: 'integrations', name: '04 / Integration Matrix' },
                { key: 'tools', name: '05 / Environment & DevOps' }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveSkillCategory(category.key)}
                  className={`w-full text-left px-5 py-4 rounded-md border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex justify-between items-center ${
                    activeSkillCategory === category.key
                      ? 'bg-bg-secondary border-text-primary text-text-primary border-l-4 border-l-accent-blue shadow-premium'
                      : 'bg-transparent border-border-primary/50 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span>{category.name}</span>
                  {activeSkillCategory === category.key && <Play size={10} className="text-accent-blue fill-accent-blue" />}
                </button>
              ))}
            </div>

            {/* Right Architecture Map Details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-secondary border border-border-primary rounded-xl shadow-premium space-y-6"
                >
                  <div className="flex justify-between items-center border-b border-border-primary/50 pb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">ACTIVE COMPONENT DIRECTORY</span>
                    <span className="text-[10px] font-mono bg-accent-blue/10 text-accent-blue px-2.5 py-1 rounded font-bold">
                      {activeSkillCategory.toUpperCase()} Layer
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills[activeSkillCategory]?.map((skill) => (
                      <div key={skill.name} className="p-5 bg-bg-primary border border-border-primary/70 rounded-lg space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-sm text-text-primary font-mono">{skill.name}</h4>
                          <span className="text-xs font-mono font-bold text-accent-blue">{skill.level}%</span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">{skill.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {skill.related.map((rel) => (
                            <span key={rel} className="text-[9px] font-mono font-semibold bg-bg-secondary text-text-secondary px-2 py-0.5 rounded border border-border-primary/80">
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

      {/* 4. SERVICES SECTION: SOFTWARE AGENCY STYLE */}
      <section id="services" className="py-24 bg-bg-secondary border-t border-border-primary">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider">
              03 // Scope of Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-text-primary tracking-tight leading-tight mt-2 mb-12">
              Solutions Portfolio
            </h2>
          </ScrollReveal>

          {/* Matrix Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Services Selection */}
            <div className="lg:col-span-4 space-y-2">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`w-full text-left p-5 rounded-lg border transition-all cursor-pointer flex flex-col gap-1 font-mono ${
                    activeServiceIdx === idx
                      ? 'bg-bg-primary border-text-primary border-l-4 border-l-accent-blue shadow-premium'
                      : 'bg-bg-secondary border-border-primary/60 hover:border-border-primary'
                  }`}
                >
                  <span className="text-[10px] text-text-muted uppercase">PILLAR 0{idx + 1}</span>
                  <h3 className="text-xs font-bold text-text-primary tracking-tight">{service.title}</h3>
                </button>
              ))}
            </div>

            {/* Detailed Problem Solution view */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-primary border border-border-primary rounded-xl space-y-6"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-border-primary/50">
                    <div>
                      <span className="font-mono text-[9px] text-accent-blue font-bold uppercase tracking-wider">PILLAR CAPABILITIES</span>
                      <h3 className="font-heading font-black text-xl text-text-primary mt-1">{services[activeServiceIdx].title}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                    <div className="p-4 bg-bg-secondary border border-border-primary/80 rounded-lg space-y-2">
                      <h4 className="font-bold text-accent-orange uppercase tracking-wider">// The Bottleneck</h4>
                      <p className="text-text-secondary leading-relaxed">{services[activeServiceIdx].shortDescription}</p>
                    </div>

                    <div className="p-4 bg-bg-secondary border border-border-primary/80 rounded-lg space-y-2">
                      <h4 className="font-bold text-accent-emerald uppercase tracking-wider">// My Solution</h4>
                      <p className="text-text-secondary leading-relaxed">{services[activeServiceIdx].deliverables}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-mono text-[10px] font-bold text-text-primary uppercase tracking-wider">Key Project Capabilities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {services[activeServiceIdx].features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle size={13} className="text-accent-emerald shrink-0 mt-0.5" />
                          <span className="text-text-secondary leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-primary/50 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex flex-wrap gap-1">
                      {services[activeServiceIdx].techUsed.map((tech) => (
                        <span key={tech} className="text-[9px] font-mono font-bold bg-bg-secondary text-text-primary border border-border-primary px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="bg-text-primary text-bg-primary px-4 py-2 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-opacity hover:opacity-90"
                    >
                      Request Consult →
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION: PRODUCT ENGINEERING SHOWCASE */}
      <section id="projects" className="py-24 bg-bg-primary border-t border-border-primary">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider">
              04 // Engineering Lab
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-text-primary tracking-tight leading-tight mt-2 mb-12">
              Featured Case Studies
            </h2>
          </ScrollReveal>

          {/* Folder Directory Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2 font-mono">
              <div className="text-[10px] text-text-muted uppercase border-b border-border-primary/80 pb-2 mb-3">
                PROJECT DIRECTORY
              </div>
              {projects.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProjectIdx(idx);
                    setActiveProjectTab('overview');
                  }}
                  className={`w-full text-left px-4 py-3.5 rounded border text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                    activeProjectIdx === idx
                      ? 'bg-bg-secondary border-text-primary text-text-primary border-l-4 border-l-accent-blue shadow-premium'
                      : 'bg-transparent border-border-primary/40 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span className="truncate">{project.title}</span>
                  <span className={`h-2 w-2 rounded-full ${project.liveUrl !== '#' ? 'bg-accent-emerald' : 'bg-accent-orange'}`} />
                </button>
              ))}
            </div>

            {/* Custom Project Showcase */}
            <div className="lg:col-span-8">
              {(() => {
                const project = projects[activeProjectIdx];
                if (!project) return null;
                return (
                  <ScrollReveal key={project.id} className="w-full">
                    <div className="bg-bg-secondary border border-border-primary rounded-xl overflow-hidden shadow-premium">
                      {/* Explorer Header */}
                      <div className="p-6 bg-bg-primary border-b border-border-primary flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-accent-blue font-bold uppercase">{project.client}</span>
                            <span className="text-[8px] font-mono bg-accent-emerald/10 text-accent-emerald px-1.5 py-0.5 rounded font-bold">
                              PRODUCTION_ACTIVE
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
                              className="border border-border-primary hover:bg-bg-secondary text-text-primary text-[10px] font-mono font-bold px-3 py-1.5 rounded inline-flex items-center gap-1.5 transition-colors"
                            >
                              <FaGithub size={12} /> Source
                            </a>
                          )}
                          {project.liveUrl !== '#' && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-text-primary text-bg-primary text-[10px] font-mono font-bold px-3 py-1.5 rounded inline-flex items-center gap-1.5 transition-opacity hover:opacity-90"
                            >
                              Launch <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Mini Tab selector */}
                      <div className="flex gap-2 px-6 pt-4 border-b border-border-primary/40 font-mono text-[10px]">
                        {[
                          { id: 'overview', label: '01 / Specifications' },
                          { id: 'architecture', label: '02 / System Design' },
                          { id: 'challenges', label: '03 / engineering_log' }
                        ].map(t => (
                          <button
                            key={t.id}
                            onClick={() => setActiveProjectTab(t.id)}
                            className={`px-3 py-2 border-t-2 border-transparent transition-all cursor-pointer uppercase tracking-wider font-semibold ${
                              activeProjectTab === t.id
                                ? 'text-accent-blue border-t-accent-blue bg-bg-primary/50'
                                : 'text-text-secondary hover:text-accent-blue'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>

                      {/* Showcase details */}
                      <div className="p-6 space-y-6">
                        <AnimatePresence mode="wait">
                          {activeProjectTab === 'overview' && (
                            <motion.div
                              key="overview"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4"
                            >
                              <p className="text-xs text-text-secondary leading-relaxed">{project.description}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                                <div className="p-4 bg-bg-primary rounded-lg border border-border-primary/80">
                                  <h5 className="font-bold text-accent-orange uppercase">// Key Challenge</h5>
                                  <p className="text-text-secondary leading-relaxed mt-1">{project.problem}</p>
                                </div>
                                <div className="p-4 bg-bg-primary rounded-lg border border-border-primary/80">
                                  <h5 className="font-bold text-accent-emerald uppercase">// System Outcome</h5>
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
                              className="space-y-4"
                            >
                              <div className="p-4 bg-bg-primary border border-border-primary rounded-lg">
                                <h4 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider mb-2">
                                  System Flow Diagram
                                </h4>
                                <p className="text-xs text-text-secondary leading-relaxed mb-4">{project.architecture}</p>
                                
                                {/* Visual system workflow preview */}
                                <div className="p-4 bg-bg-secondary rounded border border-border-primary/80 font-mono text-[9px] text-text-secondary space-y-2 select-none">
                                  <div className="flex justify-between items-center bg-bg-primary px-3 py-2 rounded">
                                    <span className="font-bold text-accent-blue">USER INTERFACE</span>
                                    <span>React client application view</span>
                                  </div>
                                  <div className="text-center text-text-muted my-1">↓ HTTP Rest Requests</div>
                                  <div className="flex justify-between items-center bg-bg-primary px-3 py-2 rounded">
                                    <span className="font-bold text-accent-violet">API MIDDLEWARE & CONTROLLER</span>
                                    <span>JWT Authentication checks & validation logic</span>
                                  </div>
                                  <div className="text-center text-text-muted my-1">↓ Mongoose ORM Operations</div>
                                  <div className="flex justify-between items-center bg-bg-primary px-3 py-2 rounded">
                                    <span className="font-bold text-accent-emerald">MONGODB DATA REPOSITORY</span>
                                    <span>Indexed relational JSON collections</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {activeProjectTab === 'challenges' && (
                            <motion.div
                              key="challenges"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-4 font-mono text-xs"
                            >
                              <div className="p-4 bg-accent-orange/10 text-text-secondary border-l-4 border-l-accent-orange rounded-r">
                                <h5 className="font-bold text-text-primary uppercase flex items-center gap-1.5 mb-1">
                                  <AlertCircle size={14} className="text-accent-orange" /> engineering_challenge.log
                                </h5>
                                <p className="leading-relaxed">{project.challenges}</p>
                              </div>

                              <div className="p-4 bg-accent-emerald/10 text-text-secondary border-l-4 border-l-accent-emerald rounded-r">
                                <h5 className="font-bold text-text-primary uppercase flex items-center gap-1.5 mb-1">
                                  <CheckCircle size={14} className="text-accent-emerald" /> resolution_status.log
                                </h5>
                                <p className="leading-relaxed">{project.outcome}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Interactive Browser Frame */}
                        <div className="pt-4 border-t border-border-primary/45">
                          <div className="project-spotlight-hover rounded-lg overflow-hidden border border-border-primary relative cursor-pointer" data-cursor-text="system_">
                            <div className="bg-bg-primary px-3 py-1.5 border-b border-border-primary flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              <span className="text-[8px] font-mono text-text-muted ml-2">
                                {project.liveUrl !== '#' ? project.liveUrl : 'localhost:3000'}
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

                        {/* Tech matrix tags */}
                        <div className="flex flex-wrap gap-1 font-mono text-[9px] pt-2">
                          {project.techStack.map(tech => (
                            <span key={tech} className="bg-bg-primary border border-border-primary text-text-secondary px-2 py-0.5 rounded font-bold">
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

      {/* 6. JOURNEY SECTION: DEVELOPER EVOLUTION TIMELINE */}
      <section id="timeline" className="py-24 bg-bg-secondary border-t border-border-primary">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider">
              05 // Growth History
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-text-primary tracking-tight leading-tight mt-2 mb-12">
              Evolutionary Milestones
            </h2>
          </ScrollReveal>

          {/* Timeline Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Year selector */}
            <div className="lg:col-span-4 space-y-2 font-mono">
              {timelineRoadmap.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`w-full text-left px-5 py-4 rounded border text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                    activeStageIdx === idx
                      ? 'bg-bg-primary border-text-primary text-text-primary border-l-4 border-l-accent-blue shadow-premium'
                      : 'bg-transparent border-border-primary/45 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span>{item.year} // {item.title.split(' ')[0]}</span>
                  <span className="text-[10px] text-accent-blue">{item.type.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Main timeline story block */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStageIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-primary border border-border-primary rounded-xl space-y-4"
                >
                  <div className="flex justify-between items-center border-b border-border-primary/45 pb-3 font-mono text-xs">
                    <span className="text-text-muted">// EXPERIENCE RECORD</span>
                    <span className="text-accent-blue font-bold">{timelineRoadmap[activeStageIdx].year}</span>
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

      {/* 7. CONTACT SECTION: CLIENT COLLABORATION WORKSPACE */}
      <section id="contact" className="py-24 bg-bg-primary border-t border-border-primary">
        <div className="section-container text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Consultation Intro details */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider">
                  06 // Start Project Intake
                </span>
                <h2 className="text-3xl md:text-5xl font-black font-heading text-text-primary tracking-tight leading-tight mt-2">
                  Initiate a Collaboration Workspace
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-xs text-text-secondary leading-relaxed font-mono">
                  Enter details to initialize a consultation ticket. We will discuss system specifications, timeline estimates, and database configuration blueprints.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="space-y-3 font-mono text-xs text-text-secondary">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-accent-blue" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-accent-blue" />
                  <span>{personalInfo.location}</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Intake Form Console */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={0.2} className="p-8 bg-bg-secondary border border-border-primary rounded-xl shadow-premium">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-text-primary mb-1">visitor_name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register('name', { required: 'Name parameter required' })}
                        className="w-full bg-bg-primary border border-border-primary rounded px-3.5 py-2.5 outline-none focus:border-accent-blue text-text-primary"
                      />
                      {errors.name && <p className="text-accent-orange text-[9px] mt-1">{errors.name.message}</p>}
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
                        className="w-full bg-bg-primary border border-border-primary rounded px-3.5 py-2.5 outline-none focus:border-accent-blue text-text-primary"
                      />
                      {errors.email && <p className="text-accent-orange text-[9px] mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-text-primary mb-1">project_specifications</label>
                    <textarea
                      rows="4"
                      placeholder="Scope, database needs, payment integrations, or timeline details..."
                      {...register('message', { required: 'Message body parameter required' })}
                      className="w-full bg-bg-primary border border-border-primary rounded px-3.5 py-2.5 outline-none focus:border-accent-blue text-text-primary resize-none"
                    />
                    {errors.message && <p className="text-accent-orange text-[9px] mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-text-primary text-bg-primary font-bold uppercase tracking-wider py-3 rounded hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? 'INITIALIZING...' : 'EXECUTE_SEND'} <Send size={12} />
                  </button>

                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="p-3 bg-accent-emerald/10 border border-accent-emerald text-accent-emerald rounded text-center text-[10px]"
                      >
                        [SUCCESS] Ticket initialized. Hari Prasath will contact you shortly.
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="p-3 bg-accent-orange/10 border border-accent-orange text-accent-orange rounded text-center text-[10px]"
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
