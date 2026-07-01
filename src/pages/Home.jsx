import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  ArrowRight, Mail, MapPin, Download, ExternalLink,
  Code, Server, Layers, Shield, Clock,
  CheckCircle, Send, ChevronRight, GraduationCap, Briefcase,
  Award, Globe, Database, Palette, Box, Sparkles
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

const sectionIds = ['hero', 'about', 'skills', 'services', 'projects', 'timeline', 'achievements', 'contact'];

const serviceIcons = [Server, Layers, BookOpen, Zap, Shield, Globe];
function BookOpen(props) { return <span {...props}>📖</span>; }
function Zap(props) { return <span {...props}>⚡</span>; }

export default function Home({ setActiveSection }) {
  const [activeSkillTab, setActiveSkillTab] = useState('frontend');
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState('overview');
  const [activeStageIdx, setActiveStageIdx] = useState(4);
  const [timelineFilter, setTimelineFilter] = useState('all');
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
        { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection]);

  const onSubmit = async (data) => {
    try {
      // Simulate EmailJS or standard form endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      reset();
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.8 },
        colors: ['#4f46e5', '#10b981', '#f59e0b', '#8b5cf6'],
      });
      setTimeout(() => setFormStatus(null), 5000);
    } catch (e) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const filteredTimeline = timelineFilter === 'all'
    ? timelineRoadmap
    : timelineRoadmap.filter(item => item.type === timelineFilter);

  return (
    <>
      <Helmet>
        <title>{personalInfo.name} — Premium MERN Stack Developer & Software Consultant</title>
        <meta name="description" content={personalInfo.summary} />
      </Helmet>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center pt-28 pb-20 bg-bg-primary relative overflow-hidden">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="section-container w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero details */}
            <div className="lg:col-span-7 text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light border border-brand/10 text-xs font-semibold text-brand mb-6">
                  <Sparkles size={12} /> Available for Freelance & Contracts
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-text-primary tracking-tight leading-tight mb-6">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple">{personalInfo.name}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-text-secondary mb-4">
                  {personalInfo.title}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-sm leading-relaxed text-text-secondary max-w-xl mb-8">
                  {personalInfo.summary}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="flex flex-wrap gap-4">
                  <Magnet>
                    <a href="#projects" className="btn btn-primary text-xs">
                      Explore Case Studies <ArrowRight size={14} />
                    </a>
                  </Magnet>
                  <Magnet>
                    <a href="#contact" className="btn btn-outline text-xs">
                      Consultation
                    </a>
                  </Magnet>
                </div>
              </ScrollReveal>
            </div>

            {/* Quick Metrics Dashboard panel */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="card p-8 bg-bg-secondary relative">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-primary">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-primary">Performance Stats</span>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald"></span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {achievements.map((item) => (
                      <div key={item.id} className="p-4 bg-bg-tertiary rounded-xl border border-border-secondary text-center">
                        <div className="text-2xl font-extrabold text-brand font-heading">
                          <AnimatedCounter end={item.count} suffix={item.suffix} />
                        </div>
                        <p className="text-[10px] uppercase font-bold text-text-muted mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>Active Location: {personalInfo.location}</span>
                    <div className="flex gap-2">
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand"><FaGithub size={16} /></a>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand"><FaLinkedin size={16} /></a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-bg-secondary border-t border-border-primary">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 text-left">
              <ScrollReveal>
                <span className="section-label">Consultancy Focus</span>
                <h2 className="section-title">Engineering Philosophy</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-secondary">
                  <p>
                    I approach software engineering as a tool to solve business problems, not just a task to write syntax.
                    As a Computer Science Engineering graduate, I pair academic foundations in database optimization, 
                    algorithm design, and network protocols with pragmatic freelance experience delivering CRM and LMS software.
                  </p>
                  <p>
                    I design databases for efficiency, create clean REST API architectures using MVC patterns, and build frontends 
                    using modular components that load instantly. Every system is build with the developer experience in mind so it 
                    can scale reliably.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 space-y-6 text-left">
              <ScrollReveal direction="right">
                <div className="card p-6 bg-bg-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-light text-brand flex items-center justify-center">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text-primary">Academic Track</h3>
                      <p className="text-[10px] text-text-muted">{education.institution}</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary font-semibold">{education.degree} ({education.major})</p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="bg-brand-light text-brand px-2 py-1 rounded font-bold">CGPA: {education.cgpa}</span>
                    <span className="text-text-muted">Graduated {education.graduationYear}</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <div className="card p-6 bg-bg-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-light text-emerald flex items-center justify-center">
                      <Code size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-text-primary">Code Competence</h3>
                      <p className="text-[10px] text-text-muted">Problem Solving & Algorithms</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Over 300+ problems solved across data structure platforms, focusing on optimal space/time algorithms.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-bg-primary border-t border-border-primary">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="section-label">Expertise</span>
            <h2 className="section-title">Technical Matrix</h2>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mt-8 mb-10">
              {Object.keys(skills).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillTab(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
                    activeSkillTab === category
                      ? 'bg-brand text-white border-brand shadow-sm'
                      : 'bg-bg-secondary text-text-secondary border-border-primary hover:border-brand/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills[activeSkillTab]?.map((skill) => (
                <div key={skill.name} className="card p-6 bg-bg-secondary flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">{skill.category}</span>
                      <span className="text-xs font-bold text-brand">{skill.level}%</span>
                    </div>
                    <h3 className="font-bold text-sm text-text-primary mb-2 font-heading">{skill.name}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">{skill.description}</p>
                  </div>
                  
                  <div>
                    <div className="skill-bar mb-4">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.related.map((rel) => (
                        <span key={rel} className="tech-badge text-[9px] px-1.5 py-0.5">{rel}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-bg-secondary border-t border-border-primary relative overflow-hidden">
        <div className="section-container text-left relative z-10">
          <ScrollReveal>
            <span className="section-label">Consulting & Offerings</span>
            <h2 className="section-title">Solutions I Engineer</h2>
            <p className="text-xs text-text-secondary max-w-xl mt-3">
              I partner with businesses as an engineering consultant. Rather than just writing syntax, I design architectures that automate operations, lower support overhead, and convert users.
            </p>
          </ScrollReveal>

          {/* Consultancy Tab Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
            {/* Left Column: Navigation Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    activeServiceIdx === idx
                      ? 'bg-bg-primary border-brand shadow-sm border-l-4 border-l-brand'
                      : 'bg-bg-secondary border-border-primary hover:border-brand/20'
                  }`}
                >
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">0{idx + 1} / Pillar</span>
                  <h3 className={`font-bold text-sm mt-1 font-heading ${
                    activeServiceIdx === idx ? 'text-brand' : 'text-text-primary'
                  }`}>
                    {service.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Right Column: Premium Service Detail Case Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card p-8 bg-bg-primary border border-border-primary shadow-premium"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-border-secondary mb-6">
                    <div>
                      <span className="text-[10px] font-mono text-brand uppercase tracking-wider">Scope & Value</span>
                      <h3 className="text-xl font-black font-heading text-text-primary mt-1">{services[activeServiceIdx].title}</h3>
                    </div>
                    <span className="bg-brand-light text-brand text-[10px] font-bold px-3 py-1.5 rounded-full border border-brand/5">
                      Target: {services[activeServiceIdx].targetAudience}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-text-secondary mb-6 font-medium">
                    {services[activeServiceIdx].shortDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-3">Key Features Included</h4>
                      <ul className="space-y-2">
                        {services[activeServiceIdx].features.map((feat, i) => (
                          <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                            <span className="text-brand flex-shrink-0 mt-0.5">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1">Deliverable Outcome</h4>
                        <p className="text-xs text-text-secondary leading-relaxed">{services[activeServiceIdx].deliverables}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1">Business Impact</h4>
                        <p className="text-xs text-text-secondary leading-relaxed font-semibold text-brand">{services[activeServiceIdx].clientBenefits}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-secondary flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {services[activeServiceIdx].techUsed.map((tech) => (
                        <span key={tech} className="tech-badge text-[9px]">{tech}</span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('contact');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                          // Pre-fill message subject
                          const textarea = document.querySelector('textarea');
                          if (textarea) {
                            textarea.value = `I am interested in consulting regarding "${services[activeServiceIdx].title}" services. Let's discuss details.`;
                            textarea.focus();
                          }
                        }
                      }}
                      className="btn btn-primary text-[10px] py-2 px-4 rounded-lg shrink-0 w-full sm:w-auto text-center"
                    >
                      Request Consultation →
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Consulting Development Workflow Stepper */}
          <div className="mt-20 pt-16 border-t border-border-primary">
            <ScrollReveal>
              <span className="section-label">Operational Workflow</span>
              <h2 className="text-xl font-bold font-heading text-text-primary tracking-tight mb-8">
                My Structured Development Process
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                {[
                  { step: '01', name: 'Alignment', desc: 'Deep dive into your sales, student, or administrative business objectives.' },
                  { step: '02', name: 'Architecture', desc: 'Design database relationships, API middleware, and secure routing layouts.' },
                  { step: '03', name: 'Engineering', desc: 'Write testable MERN Stack controllers, components, and integrations.' },
                  { step: '04', name: 'Refining', desc: 'Audit code schemas, request parameters, and Lighthouse compliance.' },
                  { step: '05', name: 'Deployment', desc: 'Launch on cloud platforms utilizing CDN caching, and custom domains.' },
                  { step: '06', name: 'Support', desc: 'Review feature modifications, workflow shifts, and scalability upgrades.' }
                ].map((wf, index) => (
                  <div key={wf.step} className="card p-6 bg-bg-primary hover:border-brand/20 relative transition-colors h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-mono font-bold text-brand uppercase tracking-wider">{wf.step} / Stage</span>
                        {index < 5 && (
                          <span className="hidden lg:inline text-text-muted select-none">→</span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-text-primary mb-2 font-heading">{wf.name}</h4>
                      <p className="text-[10px] text-text-secondary leading-relaxed">{wf.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-bg-primary border-t border-border-primary">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="section-label">Engineering Hub</span>
            <h2 className="section-title">Developer Workspace</h2>
            <p className="text-xs text-text-secondary max-w-xl mt-3 mb-16">
              Browse through production-grade systems engineered with clean architectures, JWT/RBAC role validations, payment integrations, and structured workflows.
            </p>
          </ScrollReveal>

          {/* Interactive Workspace Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Folder Explorer (3 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-bg-secondary border border-border-primary rounded-xl p-4 shadow-sm select-none">
                <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-4 pb-2 border-b border-border-secondary">
                  Active Projects Directory
                </div>
                <div className="space-y-2">
                  {projects.map((project, idx) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        setActiveProjectIdx(idx);
                        setActiveProjectTab('overview');
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-semibold font-heading transition-all cursor-pointer flex items-center justify-between ${
                        activeProjectIdx === idx
                          ? 'bg-bg-primary border-brand text-brand border-l-4 border-l-brand'
                          : 'bg-bg-secondary border-border-primary hover:border-brand/20 text-text-primary'
                      }`}
                    >
                      <span className="truncate">{project.title}</span>
                      <span className="flex h-2 w-2 relative flex-shrink-0 ml-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          project.liveUrl !== '#' ? 'bg-emerald' : 'bg-amber'
                        }`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${
                          project.liveUrl !== '#' ? 'bg-emerald' : 'bg-amber'
                        }`}></span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Project Workspace Board (8 cols) */}
            <div className="lg:col-span-8">
              {(() => {
                const project = projects[activeProjectIdx];
                if (!project) return null;
                return (
                  <ScrollReveal key={project.id}>
                    <div className="card bg-bg-secondary border border-border-primary shadow-premium overflow-hidden">
                      {/* Workspace Header */}
                      <div className="p-6 lg:p-8 bg-bg-primary border-b border-border-primary">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] font-mono text-brand font-bold uppercase tracking-wider">
                                {project.client}
                              </span>
                              <span className="text-[9px] font-mono bg-emerald-light text-emerald px-2 py-0.5 rounded border border-emerald/5 uppercase font-bold">
                                Production / Active
                              </span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-black font-heading text-text-primary mt-1">
                              {project.title}
                            </h3>
                          </div>
                          
                          <div className="flex gap-2">
                            {project.github !== '#' && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline text-[10px] py-1.5 px-3 rounded-lg flex items-center gap-1.5"
                              >
                                <FaGithub size={12} /> Repository
                              </a>
                            )}
                            {project.liveUrl !== '#' && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary text-[10px] py-1.5 px-3 rounded-lg flex items-center gap-1.5"
                              >
                                Live Demo <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Interactive Sub-tabs */}
                        <div className="flex gap-2 mt-6 overflow-x-auto pb-1">
                          {[
                            { id: 'overview', label: 'Overview & Impact' },
                            { id: 'architecture', label: 'Architecture & Schema' },
                            { id: 'metrics', label: 'Metrics & Capabilities' }
                          ].map(t => (
                            <button
                              key={t.id}
                              onClick={() => setActiveProjectTab(t.id)}
                              className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider font-heading transition-all whitespace-nowrap cursor-pointer border ${
                                activeProjectTab === t.id
                                  ? 'bg-bg-secondary text-brand border-border-primary'
                                  : 'bg-transparent text-text-secondary border-transparent hover:border-border-primary'
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Workspace Content */}
                      <div className="p-6 lg:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                          {/* Left Panel: Tab Content */}
                          <div className="lg:col-span-7 space-y-6">
                            <AnimatePresence mode="wait">
                              {activeProjectTab === 'overview' && (
                                <motion.div
                                  key="overview"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="space-y-5"
                                >
                                  <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1.5 font-heading">
                                      Project Abstract
                                    </h4>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                      {project.description}
                                    </p>
                                  </div>

                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-bg-primary rounded-xl border border-border-secondary">
                                      <h5 className="text-[9px] font-bold uppercase tracking-wider text-text-primary mb-1">
                                        Operational Problem
                                      </h5>
                                      <p className="text-[10px] text-text-secondary leading-relaxed">
                                        {project.problem}
                                      </p>
                                    </div>
                                    <div className="p-4 bg-bg-primary rounded-xl border border-border-secondary">
                                      <h5 className="text-[9px] font-bold uppercase tracking-wider text-text-primary mb-1">
                                        Engineering Solution
                                      </h5>
                                      <p className="text-[10px] text-text-secondary leading-relaxed">
                                        {project.solution}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="p-4 bg-emerald-light/10 border-l-4 border-l-emerald text-emerald rounded-r-xl">
                                    <h5 className="text-[9px] font-bold uppercase tracking-wider mb-1 font-heading">
                                      Outcomes & Business Impact
                                    </h5>
                                    <p className="text-[11px] leading-relaxed font-medium">
                                      {project.outcome}
                                    </p>
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
                                  className="space-y-5"
                                >
                                  <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-2 font-heading">
                                      System Architecture Tier
                                    </h4>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                      {project.architecture}
                                    </p>
                                  </div>

                                  <div className="p-4 bg-bg-primary border border-border-secondary rounded-xl font-mono text-[9px] text-text-secondary space-y-2 select-none">
                                    <div className="flex justify-between items-center bg-bg-secondary px-2.5 py-1.5 rounded border border-border-primary">
                                      <span className="text-brand font-semibold">CLIENT LAYER</span>
                                      <span>React SPA View Tier</span>
                                    </div>
                                    <div className="text-center text-text-muted my-0.5">↓ Request Routing</div>
                                    <div className="flex justify-between items-center bg-bg-secondary px-2.5 py-1.5 rounded border border-border-primary">
                                      <span className="text-emerald font-semibold">ROUTER & AUTH LAYER</span>
                                      <span>Express API Middleware Controllers</span>
                                    </div>
                                    <div className="text-center text-text-muted my-0.5">↓ Query Logic</div>
                                    <div className="flex justify-between items-center bg-bg-secondary px-2.5 py-1.5 rounded border border-border-primary">
                                      <span className="text-purple font-semibold">STORAGE LAYER</span>
                                      <span>MongoDB Schema Validations</span>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1.5 font-heading">
                                      Development Challenges Overcome
                                    </h4>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                      {project.challenges}
                                    </p>
                                  </div>
                                </motion.div>
                              )}

                              {activeProjectTab === 'metrics' && (
                                <motion.div
                                  key="metrics"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="space-y-5"
                                >
                                  <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-3 font-heading">
                                      Product Capabilities & Deliverables
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {project.features.map((feat, i) => (
                                        <div key={i} className="text-xs text-text-secondary flex items-start gap-2">
                                          <span className="text-emerald flex-shrink-0 mt-0.5">✓</span>
                                          <span>{feat}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="pt-4 border-t border-border-secondary">
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-3 font-heading">
                                      Technology Integration Matrix
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                      {project.techStack.map(tech => (
                                        <span key={tech} className="tech-badge bg-brand-light text-brand border-brand/5 text-[9px] px-2 py-0.5">
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Right Panel: Interactive Browser Device Mockup */}
                          <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden border border-border-primary shadow-premium group">
                              <div className="bg-bg-secondary px-4 py-2 border-b border-border-primary flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                                <span className="text-[8px] font-mono text-text-muted ml-3 select-none truncate">
                                  {project.liveUrl !== '#' ? project.liveUrl.replace('https://', '') : 'localhost:3000'}
                                </span>
                              </div>
                              <div className="aspect-video relative overflow-hidden bg-bg-tertiary">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                                />
                              </div>
                            </div>
                            
                            <div className="mt-6 flex justify-between items-center text-[10px] text-text-muted">
                              <span>Duration: Standard Engagement</span>
                              <Link to={`/project/${project.id}`} className="text-brand hover:underline font-bold font-heading">
                                View Technical Specifications →
                              </Link>
                            </div>
                          </div>
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

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-24 bg-bg-secondary border-t border-border-primary">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="section-label">Evolution Roadmap</span>
            <h2 className="section-title">Development Journey</h2>
            <p className="text-xs text-text-secondary max-w-xl mt-3 mb-16">
              Track the learning, project completions, and freelance consulting milestones that defined my software engineering growth.
            </p>
          </ScrollReveal>

          {/* Roadmap Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Vertical timeline roadmap stepper (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { id: 0, year: '2022', title: 'Foundations of Computing', tag: 'CS Core' },
                { id: 1, year: '2023', title: 'Web Core & Algorithm Rigor', tag: 'Web & DSA' },
                { id: 2, year: '2024', title: 'Full-Stack Specialization', tag: 'MERN Stack' },
                { id: 3, year: '2025', title: 'Product Engineering & Systems', tag: 'APIs & Webhooks' },
                { id: 4, year: '2026', title: 'Consulting & SaaS Architectures', tag: 'Consulting' }
              ].map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIdx(stage.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${
                    activeStageIdx === stage.id
                      ? 'bg-bg-primary border-brand shadow-sm border-l-4 border-l-brand'
                      : 'bg-bg-secondary border-border-primary hover:border-brand/20'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono text-brand font-bold uppercase tracking-wider">{stage.year} / {stage.tag}</span>
                    <h3 className={`font-bold text-sm mt-1 font-heading ${
                      activeStageIdx === stage.id ? 'text-brand' : 'text-text-primary'
                    }`}>
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-text-muted">0{stage.id + 1}</span>
                </button>
              ))}
            </div>

            {/* Right Column: Stage Details (7 cols) */}
            <div className="lg:col-span-7">
              {(() => {
                const stagesData = [
                  {
                    title: 'Foundations of Computing',
                    focus: 'Acquiring theoretical computer science principles, learning object-oriented paradigms, and framing algorithmic thinking.',
                    tech: ['Java', 'C', 'Data Structures', 'OOP Basics'],
                    milestones: [
                      'Began Bachelor of Engineering in Computer Science',
                      'Mastered OOP principles and procedural memory structures in C/Java',
                      'Solved initial 50+ DSA problems on LeetCode'
                    ]
                  },
                  {
                    title: 'Web Core & Algorithm Rigor',
                    focus: 'Translating logical structures into responsive client interfaces and building problem-solving consistency.',
                    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Git', 'Algorithms'],
                    milestones: [
                      'Learned asynchronous operations, DOM trees, and responsive media styles',
                      'Completed 150+ DSA problems across competitive platforms',
                      'Built first responsive utility landing pages'
                    ]
                  },
                  {
                    title: 'Full-Stack Specialization',
                    focus: 'Deep dive into server execution runtimes, MVC backends, NoSQL database structures, and token authentication.',
                    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
                    milestones: [
                      'Mastered state hooks, Context APIs, and React Router configurations',
                      'Engineered REST API controller actions secured with JWT session validations',
                      'Constructed relational references using Mongoose schema constraints'
                    ]
                  },
                  {
                    title: 'Product Engineering & Systems',
                    focus: 'Integrating third-party APIs, processing payments, designing webhooks, and structuring automated scripts.',
                    tech: ['Google Apps Script', 'Razorpay', 'WhatsApp Cloud API', 'Firebase Auth', 'Postman'],
                    milestones: [
                      'Ranked University 4th in the IEEE Xtreme 24h coding challenge',
                      'Built and delivered sheet-to-email document automation scripts to clients',
                      'Integrated payment gateway checkouts with automated webhook validations'
                    ]
                  },
                  {
                    title: 'Consulting & SaaS Architectures',
                    focus: 'Deploying robust MERN systems, optimizing load performance (Lighthouse), and consulting clients on workflow operations.',
                    tech: ['Render', 'Vercel', 'System Design', 'Performance Optimization', 'Lighthouse Audits'],
                    milestones: [
                      'Completed custom enterprise LMS and CRM systems for B2B client contracts',
                      'Saved clients up to 20 manual hours weekly via automated scripting triggers',
                      'Secured 95+ performance compliance targets on production environments'
                    ]
                  }
                ];
                const activeStage = stagesData[activeStageIdx];
                if (!activeStage) return null;
                return (
                  <ScrollReveal key={activeStageIdx}>
                    <div className="card p-8 bg-bg-primary border border-border-primary shadow-premium space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-border-secondary">
                        <div>
                          <span className="text-[10px] font-mono text-brand uppercase tracking-wider">Evolution Stage 0{activeStageIdx + 1}</span>
                          <h3 className="text-lg font-black font-heading text-text-primary mt-1">{activeStage.title}</h3>
                        </div>
                        <span className="text-xs font-mono font-bold bg-brand-light text-brand px-2.5 py-1 rounded border border-brand/5">
                          Stage Focus
                        </span>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1.5 font-heading">Stage Focus & Objectives</h4>
                        <p className="text-xs text-text-secondary leading-relaxed font-medium">
                          {activeStage.focus}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-3 font-heading">Key Milestones Achieved</h4>
                        <ul className="space-y-2">
                          {activeStage.milestones.map((m, i) => (
                            <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                              <span className="text-brand flex-shrink-0">✓</span>
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border-secondary">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary mb-2.5 font-heading">Technologies Mastered</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeStage.tech.map((t) => (
                            <span key={t} className="tech-badge bg-brand-light text-brand border-brand/10 text-[9px] px-2 py-0.5">
                              {t}
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

          {/* Continuous Loop Visual Stepper */}
          <div className="mt-16 p-6 rounded-xl border border-border-primary bg-bg-primary/50 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xs font-bold font-heading text-text-primary">Continuous Engineering Philosophy:</span>
            <div className="flex flex-wrap justify-center gap-3 text-[10px] font-mono text-text-secondary">
              {['Learn', 'Build', 'Test', 'Improve', 'Deploy', 'Repeat'].map((step, idx) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-brand font-bold">{step}</span>
                  {idx < 5 && <span className="text-text-muted">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-bg-primary border-t border-border-primary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label justify-center">Consultation</span>
              <h2 className="section-title text-center">Let's Discuss Your Project</h2>
              <p className="text-xs text-text-secondary max-w-md mx-auto mt-4">
                Reach out to schedule a consultation regarding CRM/LMS engineering or MERN Stack solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
              {/* Contact Information */}
              <div className="md:col-span-5 space-y-6">
                <div className="card p-6 bg-bg-secondary space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-brand" />
                    <div>
                      <p className="text-[10px] uppercase font-mono text-text-muted">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-text-primary hover:underline">{personalInfo.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-brand" />
                    <div>
                      <p className="text-[10px] uppercase font-mono text-text-muted">Location</p>
                      <p className="text-xs font-semibold text-text-primary">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-brand" />
                    <div>
                      <p className="text-[10px] uppercase font-mono text-text-muted">Timezone</p>
                      <p className="text-xs font-semibold text-text-primary">IST (GMT +5:30)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-xs flex-grow justify-center"><FaWhatsapp size={14} /> WhatsApp</a>
                  <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-xs flex-grow justify-center"><Download size={14} /> Resume</a>
                </div>
              </div>

              {/* Form Input fields */}
              <div className="md:col-span-7">
                <div className="card p-8 bg-bg-secondary">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1.5">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your full name" 
                        className="form-input"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1.5">Email</label>
                      <input 
                        type="email" 
                        placeholder="your.email@domain.com" 
                        className="form-input"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary mb-1.5">Message</label>
                      <textarea 
                        rows={4} 
                        placeholder="Project description, timeline, or requirements..." 
                        className="form-input resize-none"
                        {...register('message', { required: 'Message is required' })}
                      />
                      {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message.message}</p>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full text-xs">
                      {isSubmitting ? 'Sending Request...' : 'Send Message'} <Send size={12} />
                    </button>

                    <AnimatePresence>
                      {formStatus === 'success' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-3 bg-emerald-light border border-emerald/10 text-emerald text-xs rounded-lg flex items-center gap-2"
                        >
                          <CheckCircle size={14} /> Message sent successfully! I will reply in 24 hours.
                        </motion.div>
                      )}
                      {formStatus === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-3 bg-red-50 text-red-500 text-xs rounded-lg"
                        >
                          An error occurred. Please mail me directly.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
