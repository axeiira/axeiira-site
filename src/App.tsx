import { useEffect, useState, type ReactNode } from "react";
import { FiFileText, FiGithub, FiMail, FiMapPin, FiMoon, FiSun } from "react-icons/fi";
import { profile, projects, work } from "./data/portfolio";

type Theme = "dark" | "light";

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

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
            <h1 className="text-lg font-bold text-primary sm:text-xl">{profile.name}</h1>
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
          <p className="leading-7 text-secondary">{profile.currently}</p>
        </Section>

        <Section title="work">
          <div className="space-y-5">
            {work.map((item) => (
              <article key={item.company} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-bold text-primary">{item.company}</h3>
                  <p className="mt-1 text-secondary">{item.role}</p>
                </div>
                <p className="pt-0.5 text-right text-xs text-muted">{item.period}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="projects">
          <div className="space-y-5">
            {projects.map((project) => (
              <article key={project.name} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-bold text-primary">{project.name}</h3>
                  <p className="mt-1 text-secondary">{project.description}</p>
                </div>
                <p className="pt-0.5 text-right text-xs text-muted">{project.year}</p>
              </article>
            ))}
          </div>
        </Section>

        <footer className="flex justify-center gap-5 pt-2 text-muted">
          <a href={profile.email} aria-label="email" className="transition hover:text-primary">
            <FiMail aria-hidden="true" />
          </a>
          <a href={profile.github} aria-label="github" className="transition hover:text-primary">
            <FiGithub aria-hidden="true" />
          </a>
          <a href={profile.cv} aria-label="view cv" className="transition hover:text-primary">
            <FiFileText aria-hidden="true" />
          </a>
        </footer>
      </div>
    </main>
  );
}

export default App;
