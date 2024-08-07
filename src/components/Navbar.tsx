import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion} from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import { FaAlignJustify, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return(
    <>
      <div className="lg:block hidden w-auto lg:flex grid lg:ml-0 lg:justify-between text-2xl font-main lg:gap-0 px-5">
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
        <div className="lg:flex lg:block hidden grid flex-column mx-auto lg:mx-0 lg:gap-24 gap-5">
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

      <div className="lg:hidden block z-10">
        <div className="absolute left-6 top-10 transition ease-in cursor-pointer">
          {isClicked ? <FaChevronUp onClick={handleClick} style={{ color: 'white', fontSize: '24px', strokeWidth: '2' }}/> : <FaAlignJustify onClick={handleClick} style={{ color: 'white', fontSize: '24px', strokeWidth: '2' }}/>}
        </div>
        {isClicked && (
            <>
              <AnimatePresence initial={false} mode="wait">
                <motion.div 
                  className="w-auto h-[100vw] absolute top-16 left-0 right-0 grid text-center text-3xl font-main bg-main z-10 opacity-95 rounded-[50px]"
                  >
                  <Link to="/">
                    <motion.p 
                    className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer z-10"
                    >
                      home
                    </motion.p>
                  </Link>
                  <Link to="/about">
                    <motion.p 
                    className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer z-10"
                  >
                      about
                    </motion.p>
                  </Link>
                  <Link to="/projects">
                    <motion.p 
                    className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer z-10"
                    >
                      projects
                    </motion.p>
                  </Link>
                  {/* <Link to="/"> */}
                    <motion.p 
                    className="text-white cursor-not-allowed z-10"
                    >
                      blog
                    </motion.p>
                  {/* </Link> */}
                </motion.div>
              </AnimatePresence>
            </>
           )}
      </div>
    </>
  )
}