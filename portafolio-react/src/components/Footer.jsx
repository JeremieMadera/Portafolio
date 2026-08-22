import styles from './Footer.module.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* Contacto */}
      <section id="contacto" className={styles.contactSection}>
        <div className={styles.contactDivider} />
        <div className={styles.contactContainer}>
          <p className={styles.label}>04 — Contacto</p>
          <h2 className={styles.heading}>Hablemos</h2>
          <p className={styles.contactDesc}>
            Estoy disponible para nuevas oportunidades, proyectos freelance o simplemente para conectar.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:jeremiemadera05@gmail.com" className={styles.btnPrimary}>
              <FaEnvelope /> Jeremiemadera05@gmail.com
            </a>
            <a href="https://github.com/JeremieMadera" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jeremie-madera-aa14b8277/" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2026 Jeremie Madera — Desarrollador Back-End</p>
      </footer>
    </>
  );
}

export default Footer;
