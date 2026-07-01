import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function AnimatedCounter({ end, duration = 1.5, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (value) => {
        setCount(Math.floor(value));
      }
    });

    return () => controls.stop();
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums font-heading">
      {count}{suffix}
    </span>
  );
}
