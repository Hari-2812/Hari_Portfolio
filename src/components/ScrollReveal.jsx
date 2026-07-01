import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, duration = 0.6, yOffset = 24, direction = "up" }) {
  const directions = {
    up: { y: yOffset, x: 0 },
    down: { y: -yOffset, x: 0 },
    left: { x: yOffset, y: 0 },
    right: { x: -yOffset, y: 0 },
  };

  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
