import { useEffect, useState, type ReactNode } from "react";
import {
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { profile, projects, work } from "./data/portfolio";

type Theme = "dark" | "light";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-5">
      <h2 className="text-xs font-bold text-accent">
        <span aria-hidden="true">^</span> {title}
      </h2>
      {children}
    </section>
  );
}

function InlineLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-2 inline-flex w-fit items-center gap-1 text-xs text-muted transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
      aria-label={label}
    >
      view
      <FiArrowUpRight aria-hidden="true" />
    </a>
  );
}

function AnimatedName({ name, alias }: { name: string; alias: string }) {
  const [isAlias, setIsAlias] = useState(false);
  const [displayText, setDisplayText] = useState(name);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const targetText = isAlias ? alias : name;

    if (prefersReducedMotion) {
      setDisplayText(targetText);
      return;
    }

    if (displayText === targetText) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const sharedLength = [...displayText].findIndex(
        (character, index) => character !== targetText[index],
      );
      const matchingLength = sharedLength === -1 ? Math.min(displayText.length, targetText.length) : sharedLength;

      if (displayText.length > matchingLength) {
        setDisplayText(displayText.slice(0, -1));
        return;
      }

      setDisplayText(targetText.slice(0, displayText.length + 1));
    }, 42);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [alias, displayText, isAlias, name, prefersReducedMotion]);

  return (
    <button
      type="button"
      onMouseEnter={() => setIsAlias(true)}
      onMouseLeave={() => setIsAlias(false)}
      onFocus={() => setIsAlias(true)}
      onBlur={() => setIsAlias(false)}
      className="inline-flex h-7 min-w-[22ch] items-center justify-start text-left text-lg font-bold leading-none text-primary transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg sm:h-8 sm:text-xl"
      aria-label={`${name}, alias ${alias}`}
    >
      <span aria-hidden="true">{displayText}</span>
      <span className="ml-0.5 inline-block w-[1ch] animate-pulse text-accent" aria-hidden="true">
        _
      </span>
    </button>
  );
}

function ProjectsCarousel() {
  const projectsPerPage = 2;
  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const [pageIndex, setPageIndex] = useState(0);
  const visibleProjects = projects.slice(
    pageIndex * projectsPerPage,
    pageIndex * projectsPerPage + projectsPerPage,
  );

  const showPreviousProjects = () => {
    setPageIndex((index) => (index === 0 ? pageCount - 1 : index - 1));
  };

  const showNextProjects = () => {
    setPageIndex((index) => (index + 1) % pageCount);
  };

  return (
    <div className="space-y-5">
      <div className="space-y-5 transition-opacity duration-200" aria-live="polite">
        {visibleProjects.map((project) => (
          <article key={project.name} className="grid grid-cols-[1fr_auto] gap-4">
            <div>
              <h3 className="font-bold text-primary">{project.name}</h3>
              <p className="mt-1 text-secondary">{project.description}</p>
              <InlineLink href={project.href} label={`view ${project.name}`} />
            </div>
            <p className="pt-0.5 text-right text-xs text-muted">{project.year}</p>
          </article>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="flex items-center justify-between pt-1 text-xs text-muted">
          <button
            type="button"
            onClick={showPreviousProjects}
            className="transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            aria-label="show previous projects"
          >
            prev
          </button>
          <p aria-label={`project page ${pageIndex + 1} of ${pageCount}`}>
            {String(pageIndex + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={showNextProjects}
            className="transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            aria-label="show next projects"
          >
            next
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const logoSrc = `${import.meta.env.BASE_URL}${theme === "dark" ? "logo-white.svg" : "logo.svg"}`;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    const favicon = document.querySelector<HTMLLinkElement>("#favicon");
    if (favicon) {
      favicon.href = logoSrc;
    }
  }, [logoSrc, theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <main className="min-h-screen bg-bg px-6 py-8 text-primary transition-colors duration-300 sm:px-8 sm:py-12">
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed right-5 top-5 rounded-full p-2 text-muted transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
        aria-label={`switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
      </button>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[600px] flex-col justify-center gap-14">
        <header className="space-y-6 border-b border-divider pb-8">
          <div className="space-y-3">
            <h1 className="flex items-center gap-3 leading-none">
              <img
                src={logoSrc}
                alt=""
                className="h-7 w-7 shrink-0"
                aria-hidden="true"
              />
              <AnimatedName name={profile.name} alias={profile.alias} />
            </h1>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <FiMapPin aria-hidden="true" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {profile.availability}
              </span>
            </div>
          </div>
          <p className="max-w-xl leading-7 text-secondary">
            {profile.bioLead} <strong>{profile.bioHighlights[0]}</strong> and{" "}
            <strong>{profile.bioHighlights[1]}</strong>. {profile.bioTail}
          </p>
        </header>

        <Section title="currently">
          <p className="leading-7 text-secondary">
            {profile.currently.prefix}{" "}
            <a
              href={profile.currently.href}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              {profile.currently.company}
            </a>{" "}
            {profile.currently.suffix}
          </p>
        </Section>

        <Section title="work">
          <div className="space-y-5">
            {work.map((item) => (
              <article key={item.company} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-bold text-primary">{item.company}</h3>
                  <p className="mt-1 text-secondary">{item.role}</p>
                  <InlineLink href={item.href} label={`view ${item.company}`} />
                </div>
                <p className="pt-0.5 text-right text-xs text-muted">{item.period}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="personal projects">
          <ProjectsCarousel />
        </Section>

        <footer className="flex justify-center gap-5 pt-2 text-muted">
          <a
            href={profile.email}
            target="_blank"
            rel="noreferrer"
            aria-label="email"
            className="transition hover:text-primary"
          >
            <FiMail aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="transition hover:text-primary"
          >
            <FiGithub aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
            className="transition hover:text-primary"
          >
            <FiLinkedin aria-hidden="true" />
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            aria-label="view cv"
            className="transition hover:text-primary"
          >
            <FiFileText aria-hidden="true" />
          </a>
        </footer>
      </div>
    </main>
  );
}

export default App;
