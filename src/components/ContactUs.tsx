import freelancerLogo from '../../resources/freelancer-logo.png'

function ContactUs() {
  return (
    <section id="contact" className="section-shell pb-20 pt-16 lg:px-8">
      <div className="contact-shell">
        <p className="section-kicker">Contact</p>
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl text-white">Let&apos;s build your next web product with dependable engineering and high delivery quality.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I collaborate with business teams and founders to deliver full-stack applications, QA-backed releases, and
              clear implementation plans. Available for remote projects with U.S. clients.
            </p>
          </div>
          <div className="flex w-full max-w-2xl flex-col gap-4 sm:items-end">
            <a
              href="mailto:sasikumar.karikalan@gmail.com"
              className="hero-secondary flex h-auto min-h-0 w-full max-w-[420px] items-center justify-start gap-3 whitespace-normal break-all px-6 py-4 text-left leading-6"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M3 6h18v12H3V6zm2 2v.6l7 4.2 7-4.2V8l-7 4.2L5 8z" />
              </svg>
              <span>Email: sasikumar.karikalan@gmail.com</span>
            </a>
            <a
              href="https://wa.me/918939612137"
              target="_blank"
              rel="noreferrer"
              className="hero-primary h-auto min-h-0 w-full max-w-[420px] whitespace-normal break-all px-6 py-4 text-left leading-6"
            >
              Contact Number and WhatsApp: +91-8939612137
            </a>
            <div className="flex w-full max-w-[420px] justify-start gap-4">
              <a
                href="https://www.freelancer.com/u/Jack007sas"
                target="_blank"
                rel="noreferrer"
                aria-label="Freelancer profile"
                className="flex h-14 w-44 items-center justify-center overflow-hidden rounded-2xl border border-sky-300/30 bg-sky-400/10 transition hover:bg-sky-400/20"
              >
                <img
                  src={freelancerLogo}
                  alt="Freelancer"
                  className="h-full w-full scale-110 object-cover object-[center_38%]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sasikumar-karikalan-18b919190/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-300/30 bg-sky-400/10 text-sky-100 transition hover:bg-sky-400/20"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                  <path d="M6.5 8.5A1.75 1.75 0 1 0 6.5 5a1.75 1.75 0 0 0 0 3.5zM5 10h3v9H5v-9zm5 0h2.9v1.3h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.6 2 3.6 4.7V19h-3v-3.9c0-.9 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V19h-3v-9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
