'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => {
      setCursorVariant('hover');
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', mouseMove);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'var(--primary-color)',
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      height: 64,
      width: 64,
      backgroundColor: 'var(--primary-color)',
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 50,
          damping: 15,
        }}
      />
    </>
  );
} 