import { useStore } from '@/store/useStore'
import { useLanguage } from '@/hooks/useLanguage'
import { siteContent } from '@/content/site.content'

export default function TopNav() {
  const language = useStore((s) => s.language)
  const setLanguage = useStore((s) => s.setLanguage)
  const tx = useLanguage()

  return (
    <header className="top-nav">
      <div className="top-inner">
        <a className="brand" href="#/">
          <span className="brand-dot">{siteContent.nav.brand.dot}</span>
          <span>
            <span className="brand-name">{siteContent.nav.brand.name}</span>
            <span className="brand-sub">{tx(siteContent.nav.brand.sub)}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {siteContent.nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {tx(link.label)}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className={`lang-btn${language === 'en' ? ' active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
          >
            {siteContent.langToggle.en}
          </button>
          <button
            className={`lang-btn${language === 'fr' ? ' active' : ''}`}
            onClick={() => setLanguage('fr')}
            aria-pressed={language === 'fr'}
          >
            {siteContent.langToggle.fr}
          </button>
        </div>
      </div>
    </header>
  )
}
