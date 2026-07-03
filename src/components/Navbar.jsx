import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Magnet from './Magnet';
import { personalInfo } from '../constants/portfolioData';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: 'hero', label: 'Studio' },
    { id: 'about', label: 'Profile' },
    { id: 'skills', label: 'Universe' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Gallery' },
    { id: 'timeline', label: 'Growth' },
    { id: 'contact', label: 'Intake' }
  ];

  const handleNavClick = (e, id) => {
    if (!isHomePage) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setIsOpen(false);
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

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all duration-500 rounded-2xl border border-border-primary/50 studio-glass px-6 py-3.5 shadow-premium ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-2.5 select-none group"
          >
            <div className="w-8.5 h-8.5 rounded-lg bg-brand-forest text-white flex items-center justify-center font-serif font-bold text-base transition-transform duration-300 group-hover:scale-105">
              H
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold tracking-tight text-text-primary font-serif">Hari Prasath</span>
              <span className="text-[8px] text-brand-gold font-mono font-bold tracking-wider -mt-1">
                SOFTWARE STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-[10px]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id && isHomePage;
              return (
                <a
                  key={link.id}
                  href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative py-1 transition-colors duration-300 font-bold uppercase tracking-widest ${
                    isActive 
                      ? 'text-brand-forest font-extrabold' 
                      : 'text-text-secondary hover:text-brand-forest'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-brand-gold"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="w-8.5 h-8.5 rounded-lg bg-bg-primary text-text-secondary border border-border-primary/80 flex items-center justify-center hover:bg-bg-secondary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <Magnet>
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-forest text-[#FAF7F2] hover:bg-brand-forest/90 px-4.5 py-2.5 rounded-lg text-[9px] font-bold font-mono tracking-wider uppercase inline-flex items-center gap-1 transition-transform hover:scale-102"
              >
                Intake.PDF <ArrowUpRight size={11} />
              </a>
            </Magnet>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg bg-bg-primary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-bg-secondary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 rounded-lg bg-bg-primary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-bg-secondary transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden rounded-xl bg-bg-secondary/95 border border-border-primary/50"
            >
              <div className="px-4 py-6 flex flex-col gap-4 font-mono text-left">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id && isHomePage;
                  return (
                    <a
                      key={link.id}
                      href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`text-xs font-bold uppercase tracking-wider py-1.5 transition-colors ${
                        isActive 
                          ? 'text-brand-forest font-extrabold' 
                          : 'text-text-secondary hover:text-brand-forest'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-border-primary/50 flex items-center justify-between">
                  <span className="text-[9px] text-text-muted">Direct contact:</span>
                  <a 
                    href={personalInfo.resumeUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-brand-forest text-[#FAF7F2] px-4 py-2 rounded-lg text-[9px] font-bold"
                  >
                    Get Resume <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
