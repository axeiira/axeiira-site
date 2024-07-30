import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion} from "framer-motion";
import TypingAnimation from "./TypingAnimation";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  return(
    <>
      <div className="w-auto lg:flex grid lg:ml-0 flex-column lg:justify-between text-2xl font-main text-center lg:gap-0 gap-5">
        <Link to="/">
          <p 
            className="text-white"
            onMouseEnter={() => setIsHovering(true)} 
            onMouseLeave={() => setIsHovering(false)}>
              <AnimatePresence initial={false} mode="wait">
                <motion.span 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  key={isHovering ? 'hovering' : 'unhovering'}
                  >
                    {isHovering ? <TypingAnimation text="Rama Prawira" speed={120} /> : "@axeiira"}
                </motion.span>
              </AnimatePresence>
          </p>
        </Link>
        <div className="lg:flex grid flex-column mx-auto lg:mx-0 lg:gap-24 gap-5">
          <Link to="/about">
            <p className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer">about</p>
          </Link>
          <Link to="/projects">
            <p className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer">projects</p>
          </Link>
          {/* <Link to="/"> */}
            <p className="text-white cursor-not-allowed">blog</p>
          {/* </Link> */}
        </div>
      </div>
    </>
  )
}