import { experience } from '../data/portfolio'

function Experience() {
  return (
    <section id="experience" className="section-shell section-spacing">
      <div className="section-intro">
        <div>
          <p className="section-kicker">Experience</p>
          <h2 className="section-heading">From QA and automation to independent product delivery.</h2>
        </div>
        <p className="section-copy">
          15+ years in IT, including around six years onsite in Boston, USA, working across engineering, quality, and client delivery.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
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
