import profilePhoto from '../../resources/photo_filtered.png'
import resumeFile from '../../resources/Sasikumar_Karikalan_FullStackDev_Resume .pdf'

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
            Full Stack Developer and QA Engineer, AI Powered
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            15+ years of delivering reliable web products with strong engineering and quality foundations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I help businesses build and ship high-impact products across frontend, backend, and QA. From modern React
            applications to API integrations and release validation, I focus on performance, stability, and client-ready
            execution.
          </p>
          <div className="hero-actions">
            <a
              href="#projects"
              className="hero-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="hero-secondary"
            >
              Start a Conversation
            </a>
            <a
              href={resumeFile}
              download="Sasikumar_Karikalan_FullStackDev_Resume.pdf"
              className="hero-secondary"
            >
              Download Resume
            </a>
          </div>
          <div className="hero-metric-grid">
            <StatCard value="15+" label="Years in software delivery" />
            <StatCard value="300+" label="Releases coordinated and delivered" />
            <StatCard value="30X" label="Product scale-up contribution" />
          </div>
        </div>

        <div className="relative">
          <div className="showcase-shell">
            <div className="showcase-panel">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Developer Snapshot</p>
                <span className="badge border-sky-300/20 bg-sky-400/15 px-3 py-3 text-xs text-sky-100">Available for work</span>
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
                <img
                  src={profilePhoto}
                  alt="Portrait of Sasi Kumar"
                  className="h-[420px] w-full object-cover object-top"
                />
              </div>
              <div className="mt-8 space-y-4">
                <FeatureRow label="Frontend" value="React • Next.js • TypeScript • Responsive UI" />
                <FeatureRow label="Backend" value="Node.js • Express • REST APIs" />
                <FeatureRow label="Database" value="PostgreSQL • MySQL • MongoDB" />
                <FeatureRow label="Focus" value="Quality • Performance • Scalable Delivery" />
              </div>
              <div className="mt-10 rounded-3xl bg-white/5 p-5">
                <p className="text-sm text-sky-100/70">Current direction</p>
                <p className="mt-2 text-xl font-semibold">
                  Building full-stack web solutions for business clients while supporting quality-focused releases and fast iteration.
                </p>
              </div>
            </div>
          </div>
          <div className="stack-bubble">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-100/60">Preferred Stack</p>
            <p className="mt-2 text-lg font-semibold text-white">React + Next.js + TypeScript + Node.js</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="premium-stat">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </div>
  )
}

function FeatureRow({ label, value }: FeatureRowProps) {
  return (
    <div className="feature-row">
      <span className="uppercase tracking-[0.2em] text-white/50">{label}</span>
      <span className="text-right font-medium text-white/85">{value}</span>
    </div>
  )
}

export default Home
