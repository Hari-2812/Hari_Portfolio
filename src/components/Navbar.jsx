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

  // Toggle dark/light theme
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

  // Scroll and progress animations/logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }

      // Smart hide/show based on direction
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: 'hero', label: 'Dashboard' },
    { id: 'about', label: 'Identity' },
    { id: 'skills', label: 'Ecosystem' },
    { id: 'services', label: 'Solutions' },
    { id: 'projects', label: 'Products' },
    { id: 'timeline', label: 'Evolution' },
    { id: 'contact', label: 'Collab' }
  ];

  const handleNavClick = (e, id) => {
    if (!isHomePage) return; // Allow default Link navigation if not on Home Page
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setIsOpen(false);
      const offset = 90; // height of sticky navbar
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
      {/* Scroll Progress indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          lastScrollY > 20 
            ? 'py-3 bg-bg-secondary/90 backdrop-blur-md border-border-primary/80 shadow-premium' 
            : 'py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-md bg-text-primary text-bg-primary flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-105">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-text-primary">Hari Prasath</span>
              <span className="text-[10px] text-text-muted font-mono -mt-1 font-medium">Software Studio</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] bg-bg-primary/50 py-1.5 px-4 rounded-full border border-border-primary/50">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id && isHomePage;
              return (
                <a
                  key={link.id}
                  href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-2 py-1 transition-colors duration-300 font-semibold uppercase tracking-wider ${
                    isActive 
                      ? 'text-accent-blue' 
                      : 'text-text-secondary hover:text-accent-blue'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 rounded-md bg-bg-secondary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-bg-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Resume button */}
            <Magnet>
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 bg-text-primary text-bg-primary hover:opacity-90 px-4 py-2 rounded-md text-xs font-bold font-mono tracking-wider uppercase transition-opacity"
              >
                Resume <ArrowUpRight size={13} />
              </a>
            </Magnet>
          </div>

          {/* Mobile Hamburger Toggle & Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 rounded-md bg-bg-secondary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-bg-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-md bg-bg-secondary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-bg-primary transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg-secondary border-b border-border-primary overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4 font-mono">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id && isHomePage;
                  return (
                    <a
                      key={link.id}
                      href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`text-xs font-bold uppercase tracking-wider py-1.5 transition-colors ${
                        isActive 
                          ? 'text-accent-blue' 
                          : 'text-text-secondary hover:text-accent-blue'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-border-primary flex items-center justify-between">
                  <span className="text-[10px] text-text-muted">Direct contact:</span>
                  <a 
                    href={personalInfo.resumeUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-text-primary text-bg-primary px-4 py-2 rounded-md text-xs font-bold"
                  >
                    Resume <ArrowUpRight size={13} />
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
