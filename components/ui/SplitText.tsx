import { useEffect, useRef, useState } from 'react';

// Simplified version of React Bits SplitText using Framer Motion instead to avoid adding react-spring dependency
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

export function SplitText({
  text,
  className = '',
  delay = 50,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOut',
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'center'
}: SplitTextProps) {
  const words = text.split(' ').map(word => word.split(''));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold, margin: rootMargin as any });

  return (
    <p
      ref={ref}
      className={`inline-block overflow-hidden ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap" style={{ marginRight: '0.25em' }}>
          {word.map((letter, letterIndex) => {
            const index = words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex;
            return (
              <motion.span
                key={index}
                initial={{ opacity: animationFrom.opacity, y: animationFrom.transform.includes('40') ? 40 : 0 }}
                animate={isInView ? { opacity: animationTo.opacity, y: 0 } : { opacity: animationFrom.opacity, y: animationFrom.transform.includes('40') ? 40 : 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * (delay / 1000),
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom easeOut function
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
