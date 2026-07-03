import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
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
      const offset = 90;
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
      {/* PRE-FOOTER CALL TO ACTION (CTA) */}
      <section className="bg-bg-primary py-12 border-t border-border-primary text-center">
        <div className="section-container max-w-4xl">
          <div className="p-8 md:p-12 bg-bg-secondary border border-border-primary rounded-xl shadow-premium relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider">
                Work Collaborations // Active Availability
              </span>
              <h2 className="text-xl md:text-3xl font-black font-heading text-text-primary tracking-tight max-w-xl mx-auto leading-tight">
                Let's Build Something High Performance Together
              </h2>
              <p className="text-xs text-text-secondary max-w-md mx-auto leading-relaxed font-mono">
                Available for contract roles, custom SaaS application architectures, and workflow automations.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Magnet>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="bg-text-primary text-bg-primary px-5 py-2.5 rounded-md text-xs font-bold font-mono tracking-wider uppercase inline-flex items-center gap-1.5 transition-opacity hover:opacity-90"
                  >
                    Consultation <Send size={12} />
                  </a>
                </Magnet>
                <Magnet>
                  <a 
                    href={personalInfo.resumeUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="border border-border-primary hover:bg-bg-primary text-text-primary px-5 py-2.5 rounded-md text-xs font-bold font-mono tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors"
                  >
                    Get Resume <ArrowUpRight size={12} />
                  </a>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SYSTEM */}
      <footer className="bg-bg-secondary border-t border-border-primary pt-16 pb-8 text-left relative z-20 font-mono text-xs">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border-primary">
            {/* Left branding (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-lg font-black font-heading text-text-primary flex items-center gap-2 select-none">
                <span className="w-8 h-8 rounded-md bg-text-primary text-bg-primary flex items-center justify-center text-sm font-bold">
                  H
                </span>
                <span className="font-sans font-bold text-sm tracking-tight">Hari Prasath</span>
              </span>
              <p className="text-xs text-text-muted leading-relaxed max-w-sm">
                Full-stack product engineer offering engineering consultations, clean REST architectures, and cloud deployments.
              </p>
              <div className="pt-2">
                <p className="text-[10px] text-accent-emerald font-semibold flex items-center gap-1.5 select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald inline-block animate-ping" />
                  STATUS // ACTIVE_FOR_CONTRACTS
                </p>
              </div>
            </div>

            {/* Center 1: Quick Links (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary pb-2 border-b border-border-primary">
                Site Map
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-[11px]">
                {[
                  { id: 'hero', label: 'Dashboard' },
                  { id: 'about', label: 'Identity' },
                  { id: 'skills', label: 'Ecosystem' },
                  { id: 'services', label: 'Solutions' },
                  { id: 'projects', label: 'Products' },
                  { id: 'timeline', label: 'Evolution' },
                  { id: 'contact', label: 'Contact' }
                ].map(link => (
                  <li key={link.id}>
                    <a 
                      href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="text-text-secondary hover:text-accent-blue transition-colors py-0.5 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact & Socials (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-text-primary pb-2 border-b border-border-primary">
                Connectivity Channels
              </h4>
              <div className="space-y-2 text-[11px] text-text-secondary">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-text-muted shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-text-muted shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Tooltip Socials Grid */}
              <div className="flex gap-2 pt-2">
                {[
                  { id: 'github', url: personalInfo.github, icon: <FaGithub size={13} />, label: 'Git' },
                  { id: 'linkedin', url: personalInfo.linkedin, icon: <FaLinkedin size={13} />, label: 'LinkedIn' },
                  { id: 'whatsapp', url: personalInfo.whatsapp, icon: <FaWhatsapp size={13} />, label: 'WhatsApp' }
                ].map(social => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded bg-bg-primary border border-border-primary flex items-center justify-center text-text-secondary hover:bg-text-primary hover:text-bg-primary hover:border-text-primary transition-all cursor-pointer"
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
              <p>&copy; {currentYear} Hari Prasath K. All rights reserved.</p>
              <p>Designed and custom-engineered using React 19, Tailwind CSS, & Framer Motion.</p>
            </div>
            
            <span className="font-mono text-[9px] select-none text-text-muted">
              v2.0.0 // PRODUCTION_BUILD
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
              className="w-9 h-9 rounded-md bg-text-primary text-bg-primary flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer border border-border-primary"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </Magnet>
        </div>
      )}
    </div>
  );
}

