import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TypingAnimation from "../components/TypingAnimation";

const homeText: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.22,
      ease: "easeIn",
    },
  },
};

const skill = [
  "Web Development",
  "Artificial Intelligence",
  "Internet Of Things",
  "Game Development",
  "Computer Network",
  "Computer Vision",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const text = skill[index];

  const handleClick = () => {
    setIndex((currentIndex) => (currentIndex + 1) % skill.length);
  };

  return (
    <main className="retro-shell flex min-h-screen flex-col overflow-hidden px-6 pt-8 lg:px-40 lg:pt-10">
      <Navbar />
      <section className="flex flex-1 items-center justify-center py-8">
        <div className="z-0 mx-auto grid h-fit w-full max-w-5xl place-content-center text-center">
          <motion.h1
            variants={homeText}
            initial="initial"
            animate="animate"
            exit="exit"
            className="font-main text-4xl font-medium tracking-tight text-white lg:text-7xl"
          >
            Hello, I do
          </motion.h1>
          <div className="mx-auto mt-8 h-px w-52 bg-accent-line" />
          <AnimatePresence mode="wait">
            <motion.button
              type="button"
              variants={homeText}
              initial="initial"
              animate="animate"
              exit="exit"
              key={text}
              onClick={handleClick}
              className="retro-panel mx-auto mt-8 inline-flex w-fit cursor-pointer items-center justify-center px-5 py-4 transition duration-150 hover:border-accent/70"
            >
              <h2 className="font-mono text-base uppercase tracking-[0.2em] text-accent lg:text-3xl">
                <TypingAnimation text={text} speed={55} />
              </h2>
            </motion.button>
          </AnimatePresence>
          <p className="mx-auto mt-6 max-w-xl font-mono text-[10px] uppercase tracking-[0.15em] text-muted lg:text-xs">
            Click the highlighted line to cycle capabilities.
          </p>
          <Link to="/about" className="mx-auto mt-10">
            <div className="retro-button text-xs lg:text-sm">Learn More</div>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
