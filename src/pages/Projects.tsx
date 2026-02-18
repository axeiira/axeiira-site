import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const placeholderProjects = [
  {
    title: "Project 01",
    type: "Web Platform",
    status: "In Progress",
    year: "2026",
  },
  {
    title: "Project 02",
    type: "AI Tooling",
    status: "Planning",
    year: "2026",
  },
  {
    title: "Project 03",
    type: "Embedded System",
    status: "Archived",
    year: "2025",
  },
];

export default function Projects() {
  return (
    <main className="retro-shell flex min-h-screen flex-col overflow-hidden px-6 pt-10 lg:px-40">
      <Navbar />
      <section className="flex flex-1 items-center py-10">
        <div className="retro-panel mx-auto max-w-5xl px-6 py-10 lg:px-10">
          <h1 className="font-main text-4xl font-bold lowercase text-white lg:text-6xl">
            projects
          </h1>
          <p className="mt-6 max-w-xl font-mono text-xs uppercase tracking-[0.14em] text-muted lg:text-sm">
            Selected work will appear here in a minimal archive layout.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {placeholderProjects.map((project) => (
              <article
                key={project.title}
                className="retro-panel p-5 text-left transition duration-150 hover:border-accent/60"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {project.year} / {project.status}
                </p>
                <h2 className="mt-3 font-main text-2xl font-medium text-white">
                  {project.title}
                </h2>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.13em] text-accent">
                  {project.type}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
