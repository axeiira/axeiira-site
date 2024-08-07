import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TypingAnimation from "../components/TypingAnimation";

const homeText: Variants = {
  initial: {opacity: 0, scale: 0 },
  animate: {opacity: 1, scale: 1 },
  exit: {opacity: 0, scale: 1 },
};

const skill = [
  "Web Development",
  "Artificial Intelligence",
  "Internet Of Things",
  "Game Development",
  "Computer Network",
  "Computer Vision",
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(skill[index])

  const handleClick = () => {
    if(index != skill.length-1){
      setIndex(index+1)
    }
    else{
      setIndex(0)
    }
  }

  useEffect(() => {
    setText(skill[index])
  },[index])

  return(
    <>
      <main className="bg-main lg:h-fit h-screen overflow-hidden lg:px-40 lg:pt-10 pt-5">
        <Navbar />
        <div className="h-fit grid text-center place-content-center lg:mt-28 mt-40 z-0">
          <motion.h1
            variants={homeText}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-white lg:text-[96px] text-4xl font-main z-0">
              Hello, I do
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.div
              variants={homeText}
              initial="initial"
              animate="animate"
              exit="exit"
              key={text}
              onClick={handleClick}
              transition={{
                type: "tween",
                stiffness: 300,
              }}
              className="w-auto h-fit bg-horizontal-red bg-clip-text cursor-pointer">
                <h2 className="text-transparent lg:text-8xl text-4xl lg:mt-20 mt-5 font-main">
                  <TypingAnimation text={text} speed={70} />
                </h2>
            </motion.div>
          </AnimatePresence>
          <div className="w-fit mx-auto border-dotted border-2 border-white opacity-40 hover:opacity-80 rounded-full cursor-help mt-10">
            <p className="text-white text-sm font-main font-thin lg:px-[30px] px-[10px] py-[8px]">PS : Click the colored text to see what more can i do !</p>
          </div>
          <Link to="/about">
            <div className="mx-auto lg:w-[250px] w-[150px] h-[60px] bg-white rounded-full place-content-center lg:mt-[50px] mt-10 cursor-pointer hover:scale-110 transition ease-in drop-shadow-button">
              <p className="text-center lg:text-[26px] text-[18px] font-main font-medium">Learn More</p>
            </div>
          </Link>
        </div>
        <Footer />
      </main>
    </>
  )
}