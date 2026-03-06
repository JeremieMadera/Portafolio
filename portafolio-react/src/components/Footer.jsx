import styles from './Footer.module.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="Contacto" className={styles.footer}>
      <nav className={styles.nav}>
        <a href="https://github.com/JeremieMadera" aria-label="Ve el codigo en el github" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jeremie-madera-aa14b8277/" aria-label="Ve el perfil de LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="mailto:jeremiemadera05@gmail.com" aria-label="Envía un correo electrónico" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
