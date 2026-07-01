import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, MapPin, ChevronRight, Download, Send, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Magnet from './Magnet';
import { personalInfo } from '../constants/portfolioData';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, id) => {
    if (!isHomePage) return; // Allow normal routing
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      {/* 1. PRE-FOOTER CALL TO ACTION (CTA) */}
      <section className="bg-bg-primary py-16 border-t border-border-primary text-center">
        <div className="section-container max-w-4xl">
          <div className="card p-8 md:p-12 bg-bg-secondary border border-border-primary shadow-premium relative overflow-hidden">
            {/* Background Accent Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="text-[10px] font-mono text-brand font-bold uppercase tracking-wider">
                Work Collaborations
              </span>
              <h2 className="text-2xl md:text-3xl font-black font-heading text-text-primary tracking-tight max-w-2xl mx-auto leading-tight">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xs text-text-secondary max-w-md mx-auto leading-relaxed">
                Whether you need a custom CRM dashboard, a learning academy (LMS), or workflow scripts to automate manual tasks — I am available to consult.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Magnet>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="btn btn-primary text-xs"
                  >
                    Start Consultation <Send size={12} className="ml-1" />
                  </a>
                </Magnet>
                <Magnet>
                  <a 
                    href={personalInfo.resumeUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline text-xs"
                  >
                    Download Resume <Download size={12} className="ml-1" />
                  </a>
                </Magnet>
                <Magnet>
                  <a 
                    href="#projects" 
                    onClick={(e) => handleNavClick(e, 'projects')}
                    className="btn btn-outline text-xs"
                  >
                    View Projects
                  </a>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOOTER SYSTEM */}
      <footer className="bg-bg-secondary border-t border-border-primary pt-16 pb-8 text-left relative z-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-border-primary">
            {/* Left branding (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-lg font-black font-heading text-text-primary flex items-center gap-1.5 select-none">
                <span className="w-7 h-7 rounded-lg bg-linear-to-tr from-brand to-purple flex items-center justify-center text-white text-sm">
                  H
                </span>
                <span>Hari Prasath<span className="text-brand">.</span></span>
              </span>
              <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
                Freelance MERN Stack Developer building scalable platforms, operations automation, and business intelligence dashboards.
              </p>
              <div className="pt-2">
                <span className="text-[10px] uppercase font-bold text-text-muted">Direct Availability</span>
                <p className="text-xs text-emerald font-semibold flex items-center gap-1.5 mt-1 select-none">
                  <span className="h-2 w-2 rounded-full bg-emerald inline-block animate-pulse" />
                  Open for Contracts & Freelance Projects
                </p>
              </div>
            </div>

            {/* Center 1: Quick Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary pb-2 border-b border-border-secondary">
                Quick Navigation
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'services', label: 'Services' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'timeline', label: 'Journey' },
                  { id: 'contact', label: 'Contact' }
                ].map(link => (
                  <li key={link.id}>
                    <a 
                      href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="text-text-secondary hover:text-brand transition-colors py-0.5 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center 2: Services Summary (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary pb-2 border-b border-border-secondary">
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li>MERN Apps</li>
                <li>CRM Development</li>
                <li>LMS Development</li>
                <li>API Integrations</li>
                <li>Apps Script Scripts</li>
                <li>Responsive Web</li>
              </ul>
            </div>

            {/* Right: Contact & Socials (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary pb-2 border-b border-border-secondary">
                Communication channels
              </h4>
              <div className="space-y-3 text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-brand shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-brand shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Accessible Tooltip Socials Grid */}
              <div className="flex gap-2.5 pt-2">
                {[
                  { id: 'github', url: personalInfo.github, icon: <FaGithub size={14} />, label: 'GitHub Profile' },
                  { id: 'linkedin', url: personalInfo.linkedin, icon: <FaLinkedin size={14} />, label: 'LinkedIn Profile' },
                  { id: 'whatsapp', url: personalInfo.whatsapp, icon: <FaWhatsapp size={14} />, label: 'WhatsApp Chat' },
                  { id: 'email', url: `mailto:${personalInfo.email}`, icon: <Mail size={14} />, label: 'Send Email' }
                ].map(social => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-bg-primary border border-border-primary flex items-center justify-center text-text-secondary hover:bg-brand hover:text-white hover:border-brand transition-all cursor-pointer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom Row */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-muted">
            <div className="space-y-1 text-center md:text-left">
              <p>&copy; {currentYear} Hari Prasath K. All Rights Reserved.</p>
              <p>Designed & Developed using React 19, Vite, Tailwind CSS, & Framer Motion.</p>
            </div>
            
            <span className="font-mono select-none">
              v1.0.0 // PRODUCTION
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <Magnet>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-brand hover:bg-brand-hover text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer border border-brand/10"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </Magnet>
        </div>
      )}
    </div>
  );
}
