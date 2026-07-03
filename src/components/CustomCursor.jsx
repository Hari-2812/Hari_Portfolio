import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState('default'); // 'default', 'interactive', 'terminal', 'spotlight'
  const [hoverText, setHoverText] = useState('');
  const [ripples, setRipples] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Mouse position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for smooth lag
  const springConfig = { damping: 30, stiffness: 300, mass: 0.4 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
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
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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

      const terminalEl = target.closest('.terminal-hover');
      const spotlightEl = target.closest('.project-spotlight-hover');
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-hover') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (terminalEl) {
        setHoverState('terminal');
        setHoverText(terminalEl.getAttribute('data-cursor-text') || 'exec_');
      } else if (spotlightEl) {
        setHoverState('spotlight');
        setHoverText(spotlightEl.getAttribute('data-cursor-text') || 'VIEW SYSTEM');
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
      }, 600);
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
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed w-8 h-8 rounded-full border-2 border-accent-blue pointer-events-none z-9999"
          initial={{ x: ripple.x - 16, y: ripple.y - 16, scale: 0.1, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-text-primary rounded-full pointer-events-none z-9999"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Dynamic Outer Indicator */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-text-primary pointer-events-none z-9998 flex items-center justify-center overflow-hidden"
        animate={{
          width: hoverState === 'interactive' ? 36 : hoverState === 'terminal' ? 70 : hoverState === 'spotlight' ? 90 : 20,
          height: hoverState === 'interactive' ? 36 : hoverState === 'terminal' ? 24 : hoverState === 'spotlight' ? 90 : 20,
          backgroundColor: hoverState === 'spotlight' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(0, 0, 0, 0)',
          borderColor: hoverState === 'spotlight' ? 'rgba(59, 130, 246, 0.5)' : hoverState === 'terminal' ? '#10B981' : 'var(--text-primary)',
          borderRadius: hoverState === 'terminal' ? '4px' : '9999px',
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
          <span className={`font-mono text-[9px] select-none whitespace-nowrap tracking-wider font-bold ${
            hoverState === 'terminal' ? 'text-accent-emerald' : 'text-accent-blue'
          }`}>
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}

