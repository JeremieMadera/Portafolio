import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Sobre Mí',    href: '#sobre-mi' },
  { label: 'Proyectos',   href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto',    href: '#contacto' },
];

function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} className={styles.logo}>
          JM<span className={styles.logoDot}>.</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`${styles.link} ${activeSection === link.href.replace('#', '') ? styles.linkActive : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a href="mailto:jeremiemadera05@gmail.com" className={styles.ctaBtn}>
          Contáctame
        </a>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button onClick={() => scrollTo(link.href)} className={styles.mobileLink}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
