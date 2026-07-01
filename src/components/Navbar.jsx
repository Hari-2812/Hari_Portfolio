import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Magnet from './Magnet';
import { personalInfo } from '../constants/portfolioData';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
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

  // Change style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Journey' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (e, id) => {
    if (!isHomePage) return; // Allow default Link navigation if not on Home Page
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setIsOpen(false);
      const offset = 80; // height of sticky navbar
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-bg-secondary/80 backdrop-blur-md border-b border-border-primary shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="text-lg font-extrabold tracking-tight text-text-primary font-heading flex items-center gap-1.5"
        >
          <span className="w-8 h-8 rounded-lg bg-linear-to-tr from-brand to-purple flex items-center justify-center text-white text-base">
            H
          </span>
          <span>Hari Prasath<span className="text-brand">.</span></span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id && isHomePage;
            return (
              <a
                key={link.id}
                href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive 
                    ? 'text-brand' 
                    : 'text-text-secondary hover:text-brand'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg bg-bg-tertiary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-border-primary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume button */}
          <Magnet>
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary text-xs py-2 px-4 rounded-lg"
            >
              Resume
            </a>
          </Magnet>
        </div>

        {/* Mobile Hamburger Toggle & Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-bg-tertiary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-border-primary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-lg bg-bg-tertiary text-text-secondary border border-border-primary flex items-center justify-center hover:bg-border-primary transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
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
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id && isHomePage;
                return (
                  <a
                    key={link.id}
                    href={isHomePage ? `#${link.id}` : `/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`text-sm font-bold uppercase tracking-wider py-1.5 transition-colors ${
                      isActive 
                        ? 'text-brand' 
                        : 'text-text-secondary hover:text-brand'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-border-primary flex items-center justify-between">
                <span className="text-xs text-text-muted">Direct contact:</span>
                <a 
                  href={personalInfo.resumeUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary text-xs py-2 px-5"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
