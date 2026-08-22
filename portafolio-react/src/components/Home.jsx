import styles from './Home.module.css';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowDown } from 'react-icons/fa';

function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left */}
          <div className={styles.left}>
            <p className={styles.greeting}>&gt; Hola, soy</p>
            <h1 className={styles.name}>
              Jeremie<br />
              <span className={styles.nameAccent}>Madera</span>
            </h1>
            <p className={styles.role}>Desarrollador Back-End</p>
            <p className={styles.bio}>
              Especializado en C#, .NET, Java y SQL. Construyo soluciones escalables
              y eficientes desde Puerto Rico.
            </p>
            <nav className={styles.ctas}>
              <a href="https://github.com/JeremieMadera" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jeremie-madera-aa14b8277/" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href="mailto:jeremiemadera05@gmail.com" className={styles.btnSecondary}>
                <FaEnvelope /> Email
              </a>
            </nav>
          </div>

          {/* Right: code block */}
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} style={{ background: '#ff6b6b' }} />
              <span className={styles.dot} style={{ background: '#ffd93d' }} />
              <span className={styles.dot} style={{ background: '#6bcb77' }} />
              <span className={styles.fileName}>jeremie.cs</span>
            </div>
            <div className={styles.codeBody}>
              <p><span className={styles.cComment}>// Perfil de desarrollador</span></p>
              <p><span className={styles.cKeyword}>public class </span><span className={styles.cAccent}>Jeremie</span></p>
              <p className={styles.indent1}><span className={styles.cMuted}>: </span><span className={styles.cText}>Developer</span><span className={styles.cMuted}> {'{'}</span></p>
              <p className={styles.indent2}><span className={styles.cKeyword}>string </span><span className={styles.cText}>Role </span><span className={styles.cMuted}>= </span><span className={styles.cString}>"Back-End"</span><span className={styles.cMuted}>;</span></p>
              <p className={styles.indent2}><span className={styles.cKeyword}>string </span><span className={styles.cText}>Location </span><span className={styles.cMuted}>= </span><span className={styles.cString}>"Puerto Rico"</span><span className={styles.cMuted}>;</span></p>
              <p className={styles.indent2}><span className={styles.cKeyword}>string[] </span><span className={styles.cText}>Stack </span><span className={styles.cMuted}>= {'{'}</span></p>
              <p className={styles.indent4}><span className={styles.cString}>"C#"</span><span className={styles.cMuted}>, </span><span className={styles.cString}>".NET"</span><span className={styles.cMuted}>,</span></p>
              <p className={styles.indent4}><span className={styles.cString}>"Java"</span><span className={styles.cMuted}>, </span><span className={styles.cString}>"SQL"</span></p>
              <p className={styles.indent2}><span className={styles.cMuted}>{'}'}</span><span className={styles.cMuted}>;</span></p>
              <p><span className={styles.cMuted}>{'}'}</span></p>
            </div>
          </div>
        </div>

        <button className={styles.scrollBtn} onClick={() => scrollTo('sobre-mi')}>
          scroll
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
}

export default Home;
