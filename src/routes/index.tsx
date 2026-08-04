import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CircleUserRound,
  Clock3,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  HeartHandshake,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Store,
  X,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const starterFeatures = [
  'Home, About, Visit, Events, and Contact pages',
  'Trade policy and hours clearly displayed',
  'Mobile-first, accessible, and blazing fast',
  'Custom domain and hosting on Netlify',
  'Basic SEO setup and Google Search Console',
  'About one week from kickoff to launch',
]

const fullBuildFeatures = [
  'Everything in the Starter package',
  'AI book matchmaker grounded to real inventory',
  'Trade-in credit estimator',
  'Wishlist alerts and passwordless accounts',
  'First-party reviews and Google Places feed',
  'Reading guides and local SEO content engine',
  'Automated SEO and performance monitoring',
  'Admin dashboard for managing content',
]

const careFeatures = [
  'Hosting on Netlify or Vercel',
  'Security patches and dependency updates',
  'Content changes for events, hours, and pages',
  'Monthly performance and uptime report',
  'Email support from a real person',
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery call',
    text: 'A free 20-minute chat about your store, your goals, and what you actually need. No pressure.',
  },
  {
    number: '02',
    title: 'Proposal & agreement',
    text: 'A clear proposal with scope, timeline, and price. You approve it, then the work starts.',
  },
  {
    number: '03',
    title: 'Build & review',
    text: 'The site takes shape iteratively. You see every stage on a private, live preview URL.',
  },
  {
    number: '04',
    title: 'Launch & handoff',
    text: 'Your site goes live. You get the code, domain, and keys. Support stays close by.',
  },
]

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)
    const body = new URLSearchParams()

    formData.forEach((value, key) => {
      if (typeof value === 'string') body.append(key, value)
    })

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')

      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="1Commerce home">
          <span className="brand-mark" aria-hidden="true">
            <BookOpen size={20} strokeWidth={1.8} />
          </span>
          <span>1Commerce</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Our work</a>
          <a href="#packages">Packages</a>
          <a href="#process">Process</a>
          <a href="#contact" className="nav-cta">
            Start a conversation
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#packages" onClick={closeMenu}>Packages</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#contact" onClick={closeMenu}>Start a conversation</a>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-ornament" aria-hidden="true">
            <span className="ornament-store"><Store size={31} strokeWidth={1.5} /></span>
            <span className="ornament-book"><BookOpen size={35} strokeWidth={1.45} /></span>
            <span className="ornament-browser"><Globe2 size={27} strokeWidth={1.5} /></span>
          </div>
          <p className="eyebrow">Web services for independent bookstores</p>
          <h1>Your bookstore deserves a website that actually works.</h1>
          <p className="hero-copy">
            Custom-built sites for independent bookshops — from a simple,
            beautiful presence to a full-featured platform. No templates. No
            lock-in. You own everything.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#packages">
              See our packages <ArrowRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="https://tobereadshop.com"
              target="_blank"
              rel="noreferrer"
            >
              View our work <ExternalLink size={16} />
            </a>
            <a
              className="text-link hero-text-link"
              href="https://precisioncorebuilders.com"
              target="_blank"
              rel="noreferrer"
            >
              Other work <ExternalLink size={14} />
            </a>
          </div>
          <p className="hero-note">
            Built in Oregon for book people everywhere.
          </p>
        </section>

        <section className="work-section section" id="work">
          <div className="section-inner work-grid">
            <div className="browser-wrap">
              <div className="browser-shadow" aria-hidden="true" />
              <div className="browser-frame" role="img" aria-label="Live screenshot of the To Be Read bookstore website">
                <div className="browser-bar">
                  <span className="browser-dots" aria-hidden="true"><i /><i /><i /></span>
                  <span className="browser-url">tobereadshop.com</span>
                  <span className="browser-lock"><ShieldCheck size={13} /></span>
                </div>
                <div className="browser-page browser-page-screenshot">
                  <img
                    src="/images/tobereadshop-hero.jpg"
                    alt="To Be Read bookstore homepage showing the hero section and navigation"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="work-caption">Built, maintained, and operated by 1Commerce LLC</span>
            </div>

            <div className="work-copy">
              <p className="eyebrow">Proof, not promises</p>
              <h2>We operate tobereadshop.com</h2>
              <p className="lead-copy">
                To Be Read (formerly Clackamas Book Exchange) is a beloved used
                bookstore in Milwaukie, Oregon. We designed and built their
                entire digital presence — from the AI-powered book matchmaker
                to the trade-in credit estimator, local SEO engine, and
                community event tools.
              </p>
              <ul className="feature-list compact-list">
                {[
                  'AI book matchmaker grounded to live inventory',
                  'Trade-in credit estimator',
                  'Passwordless wishlist alerts',
                  'First-party reviews and Google Places integration',
                  'Automated SEO content engine',
                  'Mobile-first, accessible design',
                ].map((feature) => (
                  <li key={feature}><Check size={17} />{feature}</li>
                ))}
              </ul>
              <a className="text-link" href="https://tobereadshop.com" target="_blank" rel="noreferrer">
                Visit tobereadshop.com <ArrowRight size={16} />
              </a>
              <p className="trust-line">
                <BriefcaseBusiness size={17} />
                1Commerce LLC is a registered Oregon business. Real contracts.
                Real invoices. Real support.
              </p>
            </div>
          </div>
        </section>

        <section className="packages-section section" id="packages">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">What we offer</p>
              <h2>Two ways we can help your store</h2>
              <p>Start simple and grow, or go all-in from day one.</p>
            </div>

            <div className="pricing-grid">
              <article className="price-card starter-card">
                <div>
                  <span className="badge badge-starter">Starter</span>
                  <h3>The essentials, done right</h3>
                  <p className="card-description">
                    A clean, fast, professional multi-page site with everything
                    a local bookstore actually needs. No fluff, no bloat — just
                    a beautiful home for your shop online.
                  </p>
                  <ul className="feature-list">
                    {starterFeatures.map((feature) => (
                      <li key={feature}><Check size={17} />{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="price-block">
                  <span className="price-label">One-time project</span>
                  <strong>$750 – $1,200</strong>
                  <small>Depending on number of pages and content needs</small>
                </div>
              </article>

              <article className="price-card full-card">
                <span className="popular-note">For stores ready to grow</span>
                <div>
                  <span className="badge badge-full">Full build</span>
                  <h3>Like To Be Read — the works</h3>
                  <p className="card-description">
                    Everything in Starter plus custom features that turn your
                    website into a real tool for your business. Built for
                    bookstores ready to invest in their digital presence.
                  </p>
                  <ul className="feature-list">
                    {fullBuildFeatures.map((feature) => (
                      <li key={feature}><Check size={17} />{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="price-block">
                  <span className="price-label">One-time project</span>
                  <strong>$2,500 – $5,000</strong>
                  <small>Depending on scope and integrations</small>
                </div>
              </article>
            </div>

            <article className="care-card">
              <div className="care-intro">
                <span className="care-icon"><HeartHandshake size={25} /></span>
                <div>
                  <p className="eyebrow">Ongoing care</p>
                  <h3>Monthly care & hosting</h3>
                  <p>
                    We don&apos;t build it and disappear. Stay on a simple monthly
                    plan for hosting, security updates, content changes, and
                    peace of mind.
                  </p>
                </div>
              </div>
              <ul className="care-list">
                {careFeatures.map((feature) => (
                  <li key={feature}><Check size={16} />{feature}</li>
                ))}
              </ul>
              <div className="care-price">
                <strong>$75 – $250<span>/mo</span></strong>
                <small>No hidden fees. No lock-in.<br />Cancel anytime with 30 days notice.</small>
              </div>
            </article>
          </div>
        </section>

        <section className="consult-section section">
          <div className="section-inner consult-grid">
            <div>
              <p className="eyebrow">A useful hour, not a sales pitch</p>
              <h2>Need something else?</h2>
              <p className="lead-copy">
                Not sure which tier fits? Have a specific idea — a custom
                inventory tool, a newsletter system, an integration with your
                POS, or something we haven&apos;t listed? Let&apos;s talk.
              </p>
              <a className="button button-primary" href="mailto:skdev@1commerce.online?subject=Bookstore%20website%20consultation">
                Book a consultation <Mail size={17} />
              </a>
            </div>
            <aside className="consult-ticket">
              <div className="ticket-top">
                <span><Clock3 size={21} /> One-hour consultation</span>
                <strong>$100</strong>
              </div>
              <p>
                A focused 60-minute call where we listen to what you need, map
                out a plan, and give you an honest assessment of what&apos;s
                possible and what it would cost.
              </p>
              <div className="ticket-credit">
                <Sparkles size={18} />
                If you move forward with a build, the consultation fee is
                applied to your project.
              </div>
            </aside>
          </div>
        </section>

        <section className="process-section section" id="process">
          <div className="section-inner">
            <div className="section-heading left-heading">
              <p className="eyebrow">Clear from day one</p>
              <h2>How it works</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ownership-section section">
          <div className="section-inner ownership-grid">
            <div className="ownership-heading">
              <p className="eyebrow">Built to be yours</p>
              <h2>You own everything</h2>
              <p>
                Most agencies lock you into proprietary platforms you can&apos;t
                leave. We don&apos;t.
              </p>
              <a className="text-link light-link" href="https://github.com/ksksrbiz-arch/Tobe-" target="_blank" rel="noreferrer">
                See an example repository <Github size={17} />
              </a>
            </div>
            <div className="trust-points">
              <article>
                <span><Code2 size={22} /></span>
                <div><h3>Open code</h3><p>Your website&apos;s code lives in a GitHub repository you own. Every file, change, and update stays visible to you.</p></div>
              </article>
              <article>
                <span><KeyRound size={22} /></span>
                <div><h3>Known stack</h3><p>We build with industry-standard tools: Next.js, Tailwind CSS, Postgres, and Resend. No mystery meat.</p></div>
              </article>
              <article>
                <span><CircleUserRound size={22} /></span>
                <div><h3>Real business</h3><p>1Commerce LLC is a registered Oregon company. You get real contracts, real invoices, and someone who answers.</p></div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-cta">
            <p className="eyebrow">Let&apos;s build something useful</p>
            <h2>Ready when you are</h2>
            <p>Tell us about your bookstore and what you want your website to do better.</p>
            <div className="footer-details">
              <strong>Keith Skaggs</strong>
              <span>Principal, 1Commerce LLC</span>
              <span><MapPin size={15} /> Oregon-based, bookstore-owner-approved</span>
              <a href="mailto:skdev@1commerce.online"><Mail size={15} /> skdev@1commerce.online</a>
            </div>
          </div>

          <form
            className="contact-form"
            name="bookstore-inquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleContactSubmit}
          >
            <input type="hidden" name="form-name" value="bookstore-inquiry" />
            <p className="form-honeypot" aria-hidden="true">
              <label>
                Leave this field empty
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="form-row">
              <label>
                <span>Your name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Email address</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>

            <label>
              <span>Bookstore name</span>
              <input type="text" name="bookstore" autoComplete="organization" />
            </label>

            <label>
              <span>What can we help with?</span>
              <select name="project-type" defaultValue="">
                <option value="" disabled>Select a project type</option>
                <option value="new-website">A new bookstore website</option>
                <option value="website-refresh">A website refresh</option>
                <option value="digital-tools">Custom digital tools</option>
                <option value="ongoing-care">Ongoing website care</option>
                <option value="not-sure">I&apos;m not sure yet</option>
              </select>
            </label>

            <label>
              <span>Tell us a little about the project</span>
              <textarea name="message" rows={5} required />
            </label>

            <div className="form-submit-row">
              <button className="button button-cream" type="submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending…' : 'Send inquiry'}
                <ArrowRight size={17} />
              </button>
              <p className={`form-status form-status-${formStatus}`} aria-live="polite">
                {formStatus === 'success' && 'Thanks — your note is on its way. We’ll reply soon.'}
                {formStatus === 'error' && 'Something went wrong. Please email us directly instead.'}
              </p>
            </div>
          </form>
        </div>
        <div className="footer-bottom">
          <span>© 2026 1Commerce LLC. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
