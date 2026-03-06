import styles from './Home.module.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <section className={styles.homePage}>
      <h1>Hola soy</h1>
      <h1>Jeremie Madera</h1>
      <h2>Desarrollador back-end</h2>
      <nav className={styles.nav}>
        <a className={styles.logoLink} href="https://github.com/JeremieMadera" target="_blank" rel="noopener noreferrer">
          <FaGithub />Github
        </a>
        <a className={styles.logoLink} href="https://www.linkedin.com/in/jeremie-madera-aa14b8277/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />Linkedin
        </a>
        <a className={styles.logoLink} href="mailto:jeremiemadera05@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />Jeremiemadera05@gmail.com
        </a>
      </nav>
    </section>
  );
}

export default Home;
