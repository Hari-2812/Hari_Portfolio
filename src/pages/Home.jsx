import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  ArrowRight, Mail, MapPin, Download, ExternalLink,
  Code, Server, Layers, Shield, Clock,
  CheckCircle, Send, ChevronRight, GraduationCap, Briefcase,
  Award, Globe, Database, Palette, Box, Sparkles, Cpu, Play, HelpCircle, X
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
  const [selectedProject, setSelectedProject] = useState(null); // For animated expanding details
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeStageIdx, setActiveStageIdx] = useState(4);
  const [formStatus, setFormStatus] = useState(null);

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
        colors: ['#064E3B', '#D97706', '#C2410C', '#7C3AED'],
      });
      setTimeout(() => setFormStatus(null), 5000);
    } catch (e) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>
      <Helmet>
        <title>Hari Prasath K | Independent Software Studio & Product Engineer</title>
        <meta name="description" content="Portfolio of Hari Prasath K, a professional Freelance MERN Stack Developer building custom CRMs, LMS platforms, and Google Workspace automations." />
      </Helmet>

      {/* 1. HERO SECTION: FOUNDER PERSONAL BRAND */}
      <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center bg-bg-primary relative overflow-hidden grid-bg-lines">
        {/* Soft background glow circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-forest/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-forest/5 border border-brand-forest/10 rounded-lg text-xs font-mono font-bold text-brand-forest">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald animate-ping" />
                AVAILABLE // CONTRACTS & PARTNERSHIPS
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-text-primary font-serif">
                Engineering <br />
                <span className="text-brand-forest italic font-normal">custom digital products</span> <br />
                for growing startups.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm font-sans text-text-secondary leading-relaxed max-w-xl">
                I am Hari Prasath K, an independent software developer. I design responsive frontend models, secure database systems, and custom server APIs using React and the MERN stack framework.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="flex flex-wrap gap-4 pt-2">
              <Magnet>
                <a href="#projects" className="magnetic-attract bg-brand-forest hover:bg-brand-forest/95 text-[#FAF7F2] px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-premium transition-transform hover:scale-102">
                  View Product Lab <ArrowRight size={13} />
                </a>
              </Magnet>
              <Magnet>
                <a href="#contact" className="magnetic-attract border border-brand-forest/30 hover:bg-bg-secondary text-brand-forest px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors">
                  Consultation
                </a>
              </Magnet>
            </ScrollReveal>
          </div>

          {/* Software Product Previews */}
          <div className="lg:col-span-5 w-full">
            <ScrollReveal direction="left" delay={0.2} className="space-y-4">
              <div className="p-6 bg-bg-secondary border border-border-primary rounded-xl shadow-premium text-left font-mono relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl" />
                <span className="text-[9px] text-brand-gold font-bold block mb-1">SYSTEM_PILLARS // MERN</span>
                <h3 className="text-sm font-bold text-text-primary mb-2 font-serif font-semibold">Web Application Framework</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Modular database operations, indexed collections, secure JWT integrations, and out-of-band payments.
                </p>
              </div>

              <div className="p-6 bg-bg-secondary border border-border-primary rounded-xl shadow-premium text-left font-mono relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-terracotta/5 rounded-full blur-xl" />
                <span className="text-[9px] text-brand-terracotta font-bold block mb-1">AUTOMATION // API_DRIVEN</span>
                <h3 className="text-sm font-bold text-text-primary mb-2 font-serif font-semibold">Google Workspace Apps Script</h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Bulk document generation, PDF creation, and Drive APIs reducing manual workload by 95%.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. PROFILE SECTION: EDITORIAL DEVELOPER STORY */}
      <section id="about" className="py-24 bg-bg-secondary border-t border-border-primary grid-bg-dots">
        <div className="section-container text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story column */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <span className="text-[10px] font-mono text-brand-forest font-bold uppercase tracking-widest">
                  01 // Engineering Mindset
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight font-serif mt-2">
                  Building stable software systems that stand up to load.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I view programming as a tool to solve business problems, not just writing syntax. With a B.E. in Computer Science, I focus on system efficiency—like database index routing, network optimization, and secure session management. I pair this engineering approach with freelance services, helping startups release robust MVPs.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="p-6 bg-bg-primary border border-border-primary rounded-xl font-serif text-lg italic text-brand-forest">
                  "Pragmatic software means using clear schemas, writing secure middlewares, and constructing clean components that load instantly."
                </div>
              </ScrollReveal>
            </div>

            {/* Mindset items */}
            <div className="lg:col-span-5 space-y-4 font-mono text-xs">
              <ScrollReveal direction="left" className="p-6 bg-bg-primary border border-border-primary rounded-xl space-y-2.5">
                <h3 className="font-bold text-brand-terracotta uppercase tracking-wider">// 01 / Transaction Safety</h3>
                <p className="text-text-secondary leading-relaxed">
                  Verify checks using secure webhook validation keys and digital signatures, preventing transaction loss.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1} className="p-6 bg-bg-primary border border-border-primary rounded-xl space-y-2.5">
                <h3 className="font-bold text-brand-gold uppercase tracking-wider">// 02 / Role Access Security</h3>
                <p className="text-text-secondary leading-relaxed">
                  Middleware checks with Role-Based Access Control (RBAC) layers ensuring user records are fully protected.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION: TECHNOLOGY UNIVERSE MAP */}
      <section id="skills" className="py-24 bg-bg-primary border-t border-border-primary grid-bg-lines">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-forest font-bold uppercase tracking-widest">
              02 // Technology Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight font-serif mt-2 mb-12">
              Technology Universe Map
            </h2>
          </ScrollReveal>

          {/* Interactive Stack Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layers selections */}
            <div className="lg:col-span-4 space-y-2 font-mono text-xs">
              {[
                { id: 'frontend', name: 'UI Presentation Layer' },
                { id: 'backend', name: 'Logic Controller Layer' },
                { id: 'database', name: 'Data Model Layer' },
                { id: 'integrations', name: 'Integration Matrix Layer' },
                { id: 'tools', name: 'DevOps & Tool Layer' }
              ].map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveSkillCategory(layer.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${
                    activeSkillCategory === layer.id
                      ? 'bg-bg-secondary border-brand-forest text-brand-forest border-l-4 border-l-brand-forest shadow-premium font-bold'
                      : 'bg-transparent border-border-primary/50 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span>{layer.name}</span>
                  {activeSkillCategory === layer.id && <Play size={10} className="text-brand-forest fill-brand-forest shrink-0" />}
                </button>
              ))}
            </div>

            {/* Display Node detail cards */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-secondary border border-border-primary rounded-2xl shadow-premium space-y-6"
                >
                  <div className="flex justify-between items-center border-b border-border-primary pb-4 font-mono text-[10px]">
                    <span className="text-text-muted">// ARCHITECTURE DETAILS</span>
                    <span className="text-brand-forest font-bold">{activeSkillCategory.toUpperCase()} REGISTRY</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills[activeSkillCategory]?.map((skill) => (
                      <div key={skill.name} className="p-5 bg-bg-primary/40 border border-border-primary rounded-xl space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-xs text-text-primary font-mono">{skill.name}</h4>
                          <span className="text-[10px] font-mono font-bold text-brand-forest bg-brand-forest/5 px-2 py-0.5 rounded border border-brand-forest/10">
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

      {/* 4. SERVICES SECTION: SOFTWARE STUDIO PILLARS */}
      <section id="services" className="py-24 bg-bg-secondary border-t border-border-primary grid-bg-dots">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-forest font-bold uppercase tracking-widest">
              03 // Services Offered
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight font-serif mt-2 mb-12">
              Studio Consulting Services
            </h2>
          </ScrollReveal>

          {/* Matrix layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* List links */}
            <div className="lg:col-span-4 space-y-2">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 font-mono ${
                    activeServiceIdx === idx
                      ? 'bg-bg-primary border-brand-forest border-l-4 border-l-brand-forest shadow-premium'
                      : 'bg-bg-secondary border-border-primary/80 hover:border-border-primary'
                  }`}
                >
                  <span className="text-[9px] text-text-muted">SYSTEM_PILLAR 0{idx + 1}</span>
                  <h3 className="text-xs font-bold text-text-primary tracking-tight">{service.title}</h3>
                </button>
              ))}
            </div>

            {/* Matrix logs details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-primary border border-border-primary rounded-2xl space-y-6"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-border-primary">
                    <div>
                      <span className="font-mono text-[9px] text-brand-forest font-bold uppercase">SERVICE DETAILS</span>
                      <h3 className="font-serif font-extrabold text-lg text-text-primary mt-0.5">{services[activeServiceIdx].title}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                    <div className="p-4 bg-bg-secondary border border-border-primary rounded-xl space-y-2">
                      <h4 className="font-bold text-brand-terracotta uppercase tracking-wider">// Client Problem</h4>
                      <p className="text-text-secondary leading-relaxed">{services[activeServiceIdx].shortDescription}</p>
                    </div>

                    <div className="p-4 bg-bg-secondary border border-border-primary rounded-xl space-y-2">
                      <h4 className="font-bold text-brand-emerald uppercase tracking-wider">// My Solution</h4>
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
                      className="bg-brand-forest hover:bg-brand-forest/95 text-[#FAF7F2] px-4.5 py-2 rounded-lg font-mono text-[9px] font-bold uppercase tracking-wider transition-opacity"
                    >
                      Book Consultation →
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION: ENGINEERING CASE STUDY STUDIO */}
      <section id="projects" className="py-24 bg-bg-primary border-t border-border-primary grid-bg-lines">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-forest font-bold uppercase tracking-widest">
              04 // Engineering Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight font-serif mt-2 mb-12">
              Software Product Gallery
            </h2>
          </ScrollReveal>

          {/* Directory sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2 font-mono text-xs">
              <div className="text-[9px] text-text-muted uppercase border-b border-border-primary pb-2 mb-3">
                PRODUCT_INVENTORY
              </div>
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left px-5 py-4 rounded-xl border border-border-primary/50 bg-bg-secondary hover:border-brand-forest transition-all cursor-pointer flex justify-between items-center project-gallery-hover"
                  data-cursor-text="OPEN"
                >
                  <span className="font-bold text-text-primary truncate">{project.title}</span>
                  <ArrowRight size={12} className="text-brand-gold shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Desktop Mockup panels gallery */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(0, 4).map((p) => (
                <div 
                  key={p.id} 
                  onClick={() => setSelectedProject(p)}
                  className="bg-bg-secondary border border-border-primary rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 cursor-pointer project-gallery-hover"
                  data-cursor-text="DETAILS"
                >
                  <div className="aspect-video w-full overflow-hidden bg-bg-primary border-b border-border-primary">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 text-left space-y-1">
                    <span className="font-mono text-[9px] text-brand-gold font-bold uppercase">{p.client}</span>
                    <h3 className="font-serif font-bold text-sm text-text-primary leading-tight">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expanding Fullscreen Project Detail Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-text-primary/70 backdrop-blur-sm p-4 sm:p-10 flex items-center justify-center font-sans text-xs"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-bg-secondary border border-border-primary rounded-2xl w-full max-w-5xl max-h-[85vh] overflow-y-auto shadow-premium text-left relative"
              >
                {/* Header Close bar */}
                <div className="sticky top-0 bg-bg-secondary/90 backdrop-blur px-6 py-4 border-b border-border-primary flex justify-between items-center z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-brand-gold font-bold uppercase">{selectedProject.client}</span>
                    <span className="text-[8px] font-mono bg-brand-forest/5 text-brand-forest border border-brand-forest/10 px-1.5 py-0.5 rounded font-bold">
                      STUDIO_VERIFIED
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 rounded-full bg-bg-primary hover:bg-border-primary text-text-primary flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-8">
                  {/* Headline & CTAs */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <h3 className="font-serif font-extrabold text-2xl lg:text-3xl text-text-primary">{selectedProject.title}</h3>
                    <div className="flex gap-2">
                      {selectedProject.github !== '#' && (
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="border border-border-primary hover:bg-bg-primary text-text-primary text-[10px] font-mono font-bold px-4 py-2 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                        >
                          <FaGithub size={12} /> Source
                        </a>
                      )}
                      {selectedProject.liveUrl !== '#' && (
                        <a 
                          href={selectedProject.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-brand-forest text-[#FAF7F2] text-[10px] font-mono font-bold px-4 py-2 rounded-lg inline-flex items-center gap-1.5 transition-opacity hover:opacity-90 animate-pulse"
                        >
                          Launch App <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Specification description */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border-primary/60">
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="font-mono text-[10px] font-bold text-text-primary uppercase tracking-wider">// Case Specification</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{selectedProject.description}</p>
                      
                      <div className="p-4 bg-bg-primary rounded-xl border border-border-primary/80 font-mono">
                        <h5 className="font-bold text-brand-terracotta uppercase text-[10px] mb-1">// Structural Challenge</h5>
                        <p className="text-text-secondary leading-relaxed">{selectedProject.problem}</p>
                      </div>

                      <div className="p-4 bg-bg-primary rounded-xl border border-border-primary/80 font-mono">
                        <h5 className="font-bold text-brand-emerald uppercase text-[10px] mb-1">// Solved Deliverable</h5>
                        <p className="text-text-secondary leading-relaxed">{selectedProject.solution}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="p-4 bg-bg-primary rounded-xl border border-border-primary space-y-3 font-mono">
                        <h4 className="font-bold text-[10px] text-text-primary uppercase tracking-wider border-b border-border-primary/50 pb-2">// System Info</h4>
                        <div>
                          <span className="text-[9px] text-text-muted block">ROLE</span>
                          <span className="font-bold text-text-primary">Lead Architect</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-text-muted block">TECH_STACK</span>
                          <span className="font-bold text-text-primary">MERN System</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 font-mono text-[9px]">
                        {selectedProject.techStack.map(t => (
                          <span key={t} className="bg-bg-primary border border-border-primary text-text-secondary px-2.5 py-0.5 rounded font-bold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Browser Mockup image frame */}
                  <div className="rounded-xl overflow-hidden border border-border-primary bg-bg-primary">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full object-cover max-h-[400px]" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. JOURNEY SECTION: DEVELOPER EVOLUTION PROGRESS */}
      <section id="timeline" className="py-24 bg-bg-secondary border-t border-border-primary grid-bg-dots">
        <div className="section-container text-left">
          <ScrollReveal>
            <span className="text-[10px] font-mono text-brand-forest font-bold uppercase tracking-widest">
              05 // Growth roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight font-serif mt-2 mb-12">
              Developer Growth Map
            </h2>
          </ScrollReveal>

          {/* Stepper split structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Year links */}
            <div className="lg:col-span-4 space-y-2 font-mono text-xs">
              {timelineRoadmap.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${
                    activeStageIdx === idx
                      ? 'bg-bg-primary border-brand-forest text-brand-forest border-l-4 border-l-brand-forest shadow-premium font-bold'
                      : 'bg-transparent border-border-primary/45 text-text-secondary hover:border-border-primary'
                  }`}
                >
                  <span>{item.year} // {item.title.split(' ')[0]}</span>
                  <span className="text-[10px] text-brand-forest">{item.type.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Stepper log panels */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStageIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 bg-bg-primary border border-border-primary rounded-2xl space-y-4 text-left font-sans text-xs"
                >
                  <div className="flex justify-between items-center border-b border-border-primary pb-3 font-mono text-[10px]">
                    <span className="text-text-muted">// ROADMAP REPORT</span>
                    <span className="text-brand-forest font-bold">{timelineRoadmap[activeStageIdx].year}</span>
                  </div>

                  <h3 className="font-serif font-extrabold text-xl text-text-primary">
                    {timelineRoadmap[activeStageIdx].title}
                  </h3>
                  <h4 className="font-mono text-[10px] text-text-muted uppercase font-semibold">
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

      {/* 7. CONTACT SECTION: START A PROJECT WORKSPACE */}
      <section id="contact" className="py-24 bg-bg-primary border-t border-border-primary grid-bg-lines">
        <div className="section-container text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* intake logs text info */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <span className="text-[10px] font-mono text-brand-forest font-bold uppercase tracking-widest">
                  06 // Project intake terminal
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight font-serif mt-2">
                  Let's Create Your Next Product
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-xs text-text-secondary leading-relaxed font-mono">
                  Initialize a consultation session. Together we will map structural models, analyze execution scopes, and prepare database relationship systems.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="space-y-3 font-mono text-xs text-text-secondary">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-brand-forest" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-brand-forest" />
                  <span>{personalInfo.location}</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Intake Form workspace */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="left" delay={0.2} className="p-8 bg-bg-secondary border border-border-primary rounded-2xl shadow-premium contact-terminal-hover">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-text-primary mb-1">visitor_name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register('name', { required: 'Name parameter required' })}
                        className="w-full bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 outline-none focus:border-brand-forest text-text-primary"
                      />
                      {errors.name && <p className="text-brand-terracotta text-[9px] mt-1">{errors.name.message}</p>}
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
                        className="w-full bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 outline-none focus:border-brand-forest text-text-primary"
                      />
                      {errors.email && <p className="text-brand-terracotta text-[9px] mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-text-primary mb-1">project_specifications</label>
                    <textarea
                      rows="4"
                      placeholder="Scope goals, database integrations, scheduling parameters, or CRM criteria details..."
                      {...register('message', { required: 'Message body parameter required' })}
                      className="w-full bg-bg-primary border border-border-primary rounded-lg px-3.5 py-2.5 outline-none focus:border-brand-forest text-text-primary resize-none"
                    />
                    {errors.message && <p className="text-brand-terracotta text-[9px] mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-forest hover:bg-brand-forest/95 text-[#FAF7F2] font-bold uppercase tracking-wider py-3 rounded-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5 shadow-card"
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
                        className="p-3 bg-brand-terracotta/10 border border-brand-terracotta text-brand-terracotta rounded-lg text-center text-[10px]"
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
