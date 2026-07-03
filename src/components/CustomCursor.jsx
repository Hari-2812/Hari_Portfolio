import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState('default'); // 'default', 'interactive', 'terminal', 'spotlight'
  const [hoverText, setHoverText] = useState('');
  const [ripples, setRipples] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.45 };
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
      // Find magnetic attraction elements
      const magneticTargets = document.querySelectorAll('.magnetic-attract');
      let targetX = e.clientX;
      let targetY = e.clientY;
      let isAttracted = false;

      magneticTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        const distance = Math.hypot(e.clientX - center.x, e.clientY - center.y);

        // Pull cursor closer if distance is less than 50px
        if (distance < 50) {
          targetX = center.x + (e.clientX - center.x) * 0.35;
          targetY = center.y + (e.clientY - center.y) * 0.35;
          isAttracted = true;
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

      const consoleEl = target.closest('.console-hover');
      const spotlightEl = target.closest('.project-window-spotlight');
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-hover') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (consoleEl) {
        setHoverState('terminal');
        setHoverText(consoleEl.getAttribute('data-cursor-text') || 'src_');
      } else if (spotlightEl) {
        setHoverState('spotlight');
        setHoverText(spotlightEl.getAttribute('data-cursor-text') || 'LAUNCH_LAB');
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
          className="fixed w-6 h-6 rounded-full border border-brand-blue pointer-events-none z-9999"
          initial={{ x: ripple.x - 12, y: ripple.y - 12, scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      ))}

      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-text-primary pointer-events-none z-9998 flex items-center justify-center overflow-hidden"
        animate={{
          width: hoverState === 'interactive' ? 32 : hoverState === 'terminal' ? 72 : hoverState === 'spotlight' ? 96 : 18,
          height: hoverState === 'interactive' ? 32 : hoverState === 'terminal' ? 24 : hoverState === 'spotlight' ? 96 : 18,
          backgroundColor: hoverState === 'spotlight' ? 'rgba(37, 99, 235, 0.12)' : 'rgba(0,0,0,0)',
          borderColor: hoverState === 'spotlight' ? '#2563EB' : hoverState === 'terminal' ? '#7C3AED' : 'var(--text-primary)',
          borderRadius: hoverState === 'terminal' ? '4px' : '9999px',
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: "spring", stiffness: 480, damping: 30 }}
      >
        {hoverText && (
          <span className="font-mono text-[9px] font-bold select-none text-text-primary uppercase tracking-widest">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-blue rounded-full pointer-events-none z-9999"
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
