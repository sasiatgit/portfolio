import profilePhoto from '../../resources/OfficialPhoto.png'
import resumeFile from '../../resources/Sasikumar_Karikalan_Latest.pdf'

type StatCardProps = {
  value: string
  label: string
}

type FeatureRowProps = {
  label: string
  value: string
}

function Home() {
  return (
    <section id="home" className="section-shell hero-shell">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="lg:pt-6">
          <p className="premium-badge mb-4 inline-flex">
            Independent Tech Developer
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight text-black sm:text-6xl lg:text-7xl">
            From an idea to a production-ready product.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black">
            Hi, I’m Sasikumar. I bring 15+ years in IT and around six years onsite in Boston, USA.
            I independently take ideas from concept to MVP to production, across full-stack development,
            testing, cloud infrastructure, deployment, integrations, marketing, and growth.
          </p>
          <div className="hero-actions">
            <a
              href="#contact"
              className="hero-primary"
            >
              Let’s Build Your MVP
            </a>
            <a
              href="#projects"
              className="hero-secondary"
            >
              Explore My Work
            </a>
            <a
              href={resumeFile}
              download="Sasikumar_Karikalan_Latest.pdf"
              className="hero-secondary"
            >
              Download Resume
            </a>
          </div>
          <div className="hero-metric-grid">
            <StatCard value="15+" label="Years in software delivery" />
            <StatCard value="~6" label="Years onsite in Boston, USA" />
            <StatCard value="End-to-end" label="From concept to production" />
          </div>
        </div>

        <div className="relative">
          <div className="showcase-shell">
            <div className="showcase-panel">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm uppercase tracking-[0.3em] text-black">Developer Snapshot</p>
                <span className="badge border-sky-300/20 bg-sky-400/15 px-3 py-3 text-xs text-black">Open to freelance work</span>
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/5 shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
                <img
                  src={profilePhoto}
                  alt="Portrait of Sasikumar Karikalan"
                  className="h-[420px] w-full object-cover object-top"
                />
              </div>
              <div className="mt-8 space-y-4">
                <FeatureRow label="Frontend" value="React • Next.js • TypeScript • Responsive UI" />
                <FeatureRow label="Backend" value="Node.js • Express • REST APIs" />
                <FeatureRow label="Database" value="PostgreSQL • MySQL • MongoDB" />
                <FeatureRow label="Cloud" value="Vercel • Neon PostgreSQL • AWS • Amazon SNS" />
                <FeatureRow label="Delivery" value="Testing • Deployment • Integrations" />
                <FeatureRow label="Growth" value="Marketing • Product Launch • Iteration" />
              </div>
              <div className="mt-10 rounded-3xl bg-white/5 p-5">
                <p className="text-sm text-black">Let’s collaborate</p>
                <p className="mt-2 text-xl font-semibold">
                  Have an idea, an MVP to launch, or a product to improve? I’m open to freelance projects and collaborations.
                </p>
              </div>
            </div>
          </div>
          <div className="stack-bubble">
            <p className="text-xs uppercase tracking-[0.3em] text-black">Preferred Stack</p>
            <p className="mt-2 text-lg font-semibold text-black">React + Next.js + TypeScript + Node.js</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="premium-stat">
      <p className="text-3xl font-semibold text-black">{value}</p>
      <p className="mt-2 text-sm leading-6 text-black">{label}</p>
    </div>
  )
}

function FeatureRow({ label, value }: FeatureRowProps) {
  return (
    <div className="feature-row">
      <span className="uppercase tracking-[0.2em] text-black">{label}</span>
      <span className="text-right font-medium text-black">{value}</span>
    </div>
  )
}

export default Home
