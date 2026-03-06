import { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#SobreMi">Sobre Mi</a>
        <a href="#Proyectos">Proyectos</a>
        <a href="#Habilidades">Habilidades</a>
        <a href="#Contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
