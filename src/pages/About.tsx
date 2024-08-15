import Navbar from "../components/Navbar";
import picture from "../assets/profile2.jpg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import python from "../assets/python.svg";
import cplus from "../assets/c++.svg";
import tsLogo from "../assets/tsx.svg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <main className="bg-main h-fit overflow-hidden lg:px-40 px-auto pt-10">
        <Navbar />
        <div className="flex mt-20 w-fit lg:gap-32">
          <div className="grid lg:px-0 px-8">
            <h1 className="h-fit text-white font-main lg:text-6xl text-4xl font-bold lg:ml-0 lg:text-left">
              hi there,
            </h1>
            <div>
              <img
                className="lg:hidden mt-10 block rounded-[136px] border-[3px] border-[#B7074A] border-opacity-60 drop-shadow-purple"
                src={picture}
              ></img>
            </div>
            <p className="text-white font-main text-justify text-lg mx-auto lg:mt-0 mt-10">
              My name is
              <span className="text-[#9C53EF]"> Rama Prawira Suryanto</span>,
              currently majoring in
              <span className="text-[#9C53EF]">
                {" "}
                Computer Engineering at Sepuluh Nopember Institut of Technology
              </span>
              . My interest are
              <span className="text-[#9C53EF]">
                {" "}
                software development and machine learning
              </span>
              . <br></br> Though my field as a computer engineering major made
              me exposed to all kinds of technologies ! I am always very excited
              to learn something new.
            </p>
            <div className="flex justify-between gap-8 lg:mt-0 mt-10">
              <div className="mx-auto lg:w-[180px] w-[150px] h-[50px] bg-white rounded-full place-content-center cursor-pointer hover:scale-110 transition ease-in">
                <p className="text-center lg:text-[22px] text-[18px] font-main font-medium ">
                  CV
                </p>
              </div>
              <div className="mx-auto lg:w-[180px] w-[150px] h-[50px] bg-white rounded-full place-content-center cursor-pointer hover:scale-110 transition ease-in">
                <p className="text-center lg:text-[22px] text-[18px] font-main font-medium">
                  Contact Me
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="hidden lg:block rounded-[136px] border-[3px] border-[#B7074A] border-opacity-60 drop-shadow-purple"
              src={picture}
            ></img>
          </div>
        </div>

        <div className="mt-24 w-auto lg:px-0 px-8">
          <h1 className="w-auto text-right text-white font-main lg:text-6xl text-4xl font-bold">
            tech stack
          </h1>
          <div className="lg:flex grid lg:gap-4 gap-12 lg:justify-between justify-center mt-20">
            <img
              className="hover:scale-75 transition ease-out"
              src={reactIcon}
            ></img>
            <img
              className="hover:scale-75 transition ease-out"
              src={tailwindIcon}
            ></img>
            <img
              className="hover:scale-75 transition ease-out"
              src={cplus}
            ></img>
            <img
              className="hover:scale-75 transition ease-out"
              src={tsLogo}
            ></img>
            <img
              className="hover:scale-75 transition ease-out"
              src={python}
            ></img>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
