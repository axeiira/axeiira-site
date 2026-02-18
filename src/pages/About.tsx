import Navbar from "../components/Navbar";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import python from "../assets/python.svg";
import cplus from "../assets/c++.svg";
import tsLogo from "../assets/tsx.svg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="retro-shell flex min-h-screen flex-col overflow-hidden px-6 pt-10 lg:px-40">
      <Navbar />
      <section className="flex flex-1 items-center py-10">
        <div className="w-full space-y-16">
          <div className="w-full">
            <div className="grid gap-8">
              <h1 className="font-main text-4xl font-bold lowercase text-white lg:text-6xl">
                hi there,
              </h1>
              <p className="retro-panel p-6 font-main text-base leading-relaxed text-text lg:text-lg">
                My name is
                <span className="text-accent"> Rama Prawira Suryanto</span>,
                currently majoring in
                <span className="text-accent">
                  {" "}
                  Computer Engineering at Sepuluh Nopember Institut of Technology
                </span>
                . My interest are
                <span className="text-accent">
                  {" "}
                  software development and machine learning
                </span>
                . Though my field as a computer engineering major made me exposed to
                all kinds of technologies, I am always very excited to learn
                something new.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="retro-button text-xs">
                  CV
                </button>
                <button type="button" className="retro-button text-xs">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          <div className="w-auto">
            <h1 className="text-right font-main text-4xl font-bold lowercase text-white lg:text-6xl">
              tech stack
            </h1>
            <div className="mt-12 grid grid-cols-2 place-items-center gap-8 pb-4 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-6">
              <img
                className="retro-panel h-20 w-20 p-4 opacity-80 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0 lg:h-24 lg:w-24"
                src={reactIcon}
                alt="React"
              />
              <img
                className="retro-panel h-20 w-20 p-4 opacity-80 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0 lg:h-24 lg:w-24"
                src={tailwindIcon}
                alt="Tailwind CSS"
              />
              <img
                className="retro-panel h-20 w-20 p-4 opacity-80 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0 lg:h-24 lg:w-24"
                src={cplus}
                alt="C++"
              />
              <img
                className="retro-panel h-20 w-20 p-4 opacity-80 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0 lg:h-24 lg:w-24"
                src={tsLogo}
                alt="TypeScript"
              />
              <img
                className="retro-panel h-20 w-20 p-4 opacity-80 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0 lg:h-24 lg:w-24"
                src={python}
                alt="Python"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
