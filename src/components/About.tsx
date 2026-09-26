function About() {
  return (
    <section id="about" className="section-shell section-spacing">
      <div className="section-panel grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="mt-4 font-serif text-4xl text-white">An engineering foundation. An end-to-end product mindset.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            My 15+ years in IT started in QA and automation, building a strong foundation in reliable software
            and production delivery. Around six years working onsite in Boston, USA gave me hands-on
            experience collaborating with clients and teams on complex products.
          </p>
          <p>
            Today, I work as an Independent Tech Developer. I connect full-stack development, testing,
            cloud infrastructure, deployment, and integrations to take a concept through MVP and into production.
            My work also extends to marketing and growth, helping connect the product with the people it serves.
          </p>
          <p>
            On NammaTravelAssist, that includes Vercel hosting, Neon PostgreSQL, AWS-powered WhatsApp
            authentication, and Amazon SNS webhooks for two-way messaging and delivery status tracking.
            I bring the application and its cloud services together as one working product.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
