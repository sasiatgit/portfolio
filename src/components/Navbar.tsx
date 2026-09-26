import { navigation } from '../data/portfolio'

function Navbar() {
  return (
    <header className="site-header">
      <div className="section-shell py-4">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-semibold uppercase tracking-[0.25em] text-primary-content shadow-[0_10px_25px_rgba(125,211,252,0.15)]">
              SK
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200/70">Portfolio</p>
              <p className="text-sm font-semibold text-white sm:text-lg">Sasikumar Karikalan</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="btn btn-primary shrink-0 rounded-full border-0 text-sm font-semibold text-primary-content shadow-[0_12px_30px_rgba(125,211,252,0.18)]"
          >
            Let&apos;s Talk
          </a>
        </div>
        <nav className="mt-4 flex gap-5 overflow-x-auto pb-1 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="whitespace-nowrap text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
