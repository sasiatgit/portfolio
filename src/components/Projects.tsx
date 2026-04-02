import { projects } from '../data/portfolio'

function Projects() {
  return (
    <section id="projects" className="section-shell section-spacing">
      <div className="project-shell">
        <div className="section-intro">
          <div>
            <p className="section-kicker">Projects</p>
            <h2 className="section-heading">Recent work across full-stack delivery, VR collaboration, and enterprise-scale quality engineering.</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-sky-300 transition hover:text-white">
            Need something similar? Let&apos;s talk.
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="premium-card-soft"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="badge border-sky-300/20 bg-sky-400/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
                  Featured
                </span>
                <span className="h-3 w-3 rounded-full bg-sky-300" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">{project.stack}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/70">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
