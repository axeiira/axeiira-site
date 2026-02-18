import React, { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingAnimation;
