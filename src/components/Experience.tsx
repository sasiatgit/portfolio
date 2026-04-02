import { experience } from '../data/portfolio'

function Experience() {
  return (
    <section id="experience" className="section-shell section-spacing">
      <div className="section-intro">
        <div>
          <p className="section-kicker">Experience</p>
          <h2 className="section-heading">Delivery history across freelance full-stack work and large U.S. enterprise platforms.</h2>
        </div>
        <p className="section-copy">
          End-to-end contribution from engineering to release quality, with experience in high-scale systems and client-facing execution.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {experience.map((item) => (
          <article
            key={`${item.period}-${item.role}`}
            className="premium-card"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/70">{item.period}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{item.role}</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
