import React, { useState, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const controls = useAnimation();

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const cursorVariants: Variants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        controls.start('visible');
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, controls]);

  return (
    <div style={{ display: 'inline-block' }}>
      <motion.span
        initial="visible"
        animate={controls}
        variants={textVariants}
      >
        {displayedText}
      </motion.span>
      <motion.span
        variants={cursorVariants}
        animate="hidden"
      >
        |
      </motion.span>
    </div>
  );
};

export default TypingAnimation;