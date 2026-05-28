import MusicFlowCanvas from '@/components/music/MusicFlowCanvas'
import { siteContent } from '@/content/site.content'
import { useLanguage } from '@/hooks/useLanguage'

export default function DashboardPage() {
  const tx = useLanguage()

  return (
    <main>
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <span className="eyebrow">{tx(siteContent.hero.eyebrow)}</span>
          <h1>{tx(siteContent.hero.title)}</h1>
          <p>{tx(siteContent.hero.lead)}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#flow">
              {tx(siteContent.hero.primaryCta)}
            </a>
            <a className="btn btn-secondary" href="#values">
              {tx(siteContent.hero.secondaryCta)}
            </a>
          </div>
        </div>
        <div className="hero-visual" data-testid="music-flow">
          <MusicFlowCanvas />
          <div className="visual-caption">
            <strong>{tx({ en: 'Room-first listening', fr: "L'écoute commence par la room" })}</strong>
            <span>
              {tx({
                en: 'A host shares the moment. Guests join freely. The artist keeps the rights layer.',
                fr: "Un hôte partage le moment. Les invités rejoignent librement. L'artiste garde la couche des droits.",
              })}
            </span>
          </div>
        </div>
      </section>

      <section className="section-band" id="product">
        <div className="section-head">
          <h2>{tx(siteContent.product.title)}</h2>
          <p>{tx(siteContent.product.intro)}</p>
        </div>
        <div className="card-grid">
          {siteContent.product.cards.map((card) => (
            <article className="info-card" key={card.title.en}>
              <h3>{tx(card.title)}</h3>
              <p>{tx(card.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band flow-band" id="flow">
        <div className="section-head">
          <h2>{tx(siteContent.flow.title)}</h2>
          <p>{tx(siteContent.flow.intro)}</p>
        </div>
        <div className="flow-steps">
          {siteContent.flow.steps.map((step) => (
            <article className="flow-step" key={step.title.en}>
              <span>{tx(step.label)}</span>
              <h3>{tx(step.title)}</h3>
              <p>{tx(step.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" id="values">
        <div className="section-head">
          <h2>{tx(siteContent.values.title)}</h2>
          <p>{tx(siteContent.values.intro)}</p>
        </div>
        <div className="value-list">
          {siteContent.values.points.map((point) => (
            <article className="value-row" key={point.title.en}>
              <h3>{tx(point.title)}</h3>
              <p>{tx(point.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band trust-band" id="trust">
        <div className="section-head">
          <h2>{tx(siteContent.trust.title)}</h2>
          <p>{tx(siteContent.trust.intro)}</p>
        </div>
        <div className="card-grid">
          {siteContent.trust.points.map((point) => (
            <article className="info-card" key={point.title.en}>
              <h3>{tx(point.title)}</h3>
              <p>{tx(point.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-band">
        <blockquote>{tx(siteContent.manifesto.quote)}</blockquote>
        <cite>{siteContent.manifesto.attribution}</cite>
      </section>

      <footer className="site-footer">
        <span>{tx(siteContent.footer.tagline)}</span>
        <div>
          {siteContent.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}
