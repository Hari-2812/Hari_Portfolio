import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState('default'); // 'default', 'interactive', 'gallery', 'contact'
  const [hoverText, setHoverText] = useState('');
  const [ripples, setRipples] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      const touchSupport = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(touchSupport);
      
      if (!touchSupport) {
        document.documentElement.classList.add('custom-cursor-active');
      }
    };
    
    checkTouch();
    
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const magneticTargets = document.querySelectorAll('.magnetic-attract');
      let targetX = e.clientX;
      let targetY = e.clientY;

      magneticTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        const distance = Math.hypot(e.clientX - center.x, e.clientY - center.y);

        if (distance < 45) {
          targetX = center.x + (e.clientX - center.x) * 0.3;
          targetY = center.y + (e.clientY - center.y) * 0.3;
        }
      });

      mouseX.set(targetX);
      mouseY.set(targetY);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const galleryEl = target.closest('.project-gallery-hover');
      const contactEl = target.closest('.contact-terminal-hover');
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-hover') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (galleryEl) {
        setHoverState('gallery');
        setHoverText(galleryEl.getAttribute('data-cursor-text') || 'EXPLORE');
      } else if (contactEl) {
        setHoverState('contact');
        setHoverText('HIRE');
      } else if (isInteractive) {
        setHoverState('interactive');
        setHoverText('');
      } else {
        setHoverState('default');
        setHoverText('');
      }
    };

    const handleMouseDown = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Click ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed w-6 h-6 rounded-full border border-brand-terracotta pointer-events-none z-9999"
          initial={{ x: ripple.x - 12, y: ripple.y - 12, scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      ))}

      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-text-primary pointer-events-none z-9998 flex items-center justify-center overflow-hidden"
        animate={{
          width: hoverState === 'interactive' ? 32 : hoverState === 'gallery' ? 84 : hoverState === 'contact' ? 64 : 16,
          height: hoverState === 'interactive' ? 32 : hoverState === 'gallery' ? 84 : hoverState === 'contact' ? 64 : 16,
          backgroundColor: hoverState === 'gallery' ? 'rgba(194, 65, 12, 0.1)' : 'rgba(0,0,0,0)',
          borderColor: hoverState === 'gallery' ? '#C2410C' : hoverState === 'contact' ? '#D97706' : 'var(--text-primary)',
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        {hoverText && (
          <span className="font-mono text-[8px] font-bold select-none text-brand-terracotta uppercase tracking-widest">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-terracotta rounded-full pointer-events-none z-9999"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </>
  );
}
