import { projects } from '../data/portfolio'

function Projects() {
  return (
    <section id="projects" className="section-shell section-spacing">
      <div className="project-shell">
        <div className="section-intro">
          <div>
            <p className="section-kicker">Projects</p>
            <h2 className="section-heading">Featured work, from NammaTravelAssist to enterprise delivery.</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-black transition hover:text-black">
            Need something similar? Let&apos;s talk.
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="premium-card-soft flex flex-col"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="badge border-sky-300/20 bg-sky-400/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black">
                  {project.url ? 'Visit the product' : 'Experience'}
                </span>
                <span className="h-3 w-3 rounded-full bg-sky-300" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black">{project.stack}</p>
              <h3 className="mt-4 text-2xl font-semibold text-black">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-black">{project.description}</p>
              {project.highlights && (
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-black marker:text-black">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-primary mt-6 self-start"
                  aria-label={`Visit ${project.title} (opens in a new tab)`}
                >
                  Visit Live Website <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
