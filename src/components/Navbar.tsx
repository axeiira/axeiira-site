import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAlignJustify, FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div className="hidden w-auto items-center justify-between px-2 lg:flex">
        <Link to="/">
          <p className="font-mono text-sm tracking-[0.24em] text-text transition duration-150 hover:text-accent">
            AXEIIRA/01
          </p>
        </Link>
        <div className="hidden items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] lg:flex">
          <Link to="/about">
            <p className="rounded-md border border-line px-3 py-2 text-muted transition duration-150 hover:border-accent hover:text-accent">
              about
            </p>
          </Link>
          <Link to="/projects">
            <p className="rounded-md border border-line px-3 py-2 text-muted transition duration-150 hover:border-accent hover:text-accent">
              projects
            </p>
          </Link>
          <p className="cursor-not-allowed rounded-md border border-line px-3 py-2 text-muted/50">
            blog
          </p>
        </div>
      </div>

      <div className="relative block lg:hidden">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="absolute left-0 top-0 cursor-pointer text-text transition duration-150 hover:text-accent"
          onClick={handleClick}
        >
          {isClicked ? (
            <FaChevronUp style={{ fontSize: "22px", strokeWidth: "2" }} />
          ) : (
            <FaAlignJustify style={{ fontSize: "22px", strokeWidth: "2" }} />
          )}
        </button>
        <div className="pl-12 pt-0.5">
          <Link to="/">
            <p className="font-mono text-xs tracking-[0.24em] text-text">AXEIIRA/01</p>
          </Link>
        </div>
        {isClicked && (
          <div className="retro-panel absolute left-0 right-0 top-12 z-10 grid gap-3 px-4 py-5 text-center font-mono text-sm uppercase tracking-[0.18em]">
            <Link to="/" onClick={closeMenu}>
              <p className="rounded-md border border-line py-2 text-muted">home</p>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <p className="rounded-md border border-line py-2 text-muted">about</p>
            </Link>
            <Link to="/projects" onClick={closeMenu}>
              <p className="rounded-md border border-line py-2 text-muted">projects</p>
            </Link>
            <p className="cursor-not-allowed rounded-md border border-line py-2 text-muted/50">
              blog
            </p>
          </div>
        )}
      </div>
    </>
  );
}
