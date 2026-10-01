import { skillGroups } from '../data/portfolio'

function Skills() {
  return (
    <section id="skills" className="section-shell section-spacing">
      <div className="section-intro">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 className="section-heading">One partner across the product journey.</h2>
        </div>
        <p className="section-copy">
          From building the core product to testing, deployment, integrations, marketing, and growth.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="premium-card"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-xl text-black shadow-inner shadow-sky-300/10">
              {group.title.split(' ')[0].slice(0, 1)}
            </div>
            <h3 className="text-2xl font-semibold text-black">{group.title}</h3>
            <p className="mt-3 text-base leading-7 text-black">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="premium-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
