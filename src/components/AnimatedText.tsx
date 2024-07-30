import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const AnimatedText: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const originalText: string = "Hello World";
  const newText: string = "Welcome to React";

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {(isHovered ? newText : originalText).split("").map((letter: string, index: number) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;