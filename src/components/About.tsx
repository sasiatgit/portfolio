function About() {
  return (
    <section id="about" className="section-shell section-spacing">
      <div className="section-panel grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="mt-4 font-serif text-4xl text-white">Senior full-stack and QA expertise with hands-on delivery across U.S. products.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            I bring a hybrid engineering profile: full-stack product development plus deep quality assurance leadership.
            This helps teams ship faster without compromising reliability, especially on critical business platforms.
          </p>
          <p>
            I have supported U.S. education and eCommerce clients through complex release cycles, while also building
            modern React and Node.js applications for current freelance projects. My approach combines clean code,
            strong testing, and clear communication with stakeholders.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
