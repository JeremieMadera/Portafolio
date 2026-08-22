import styles from './SobreMi.module.css';

const INFO_ITEMS = [
  { label: 'Educación',    value: 'Inter — B.S. Ciencias de Computación' },
  { label: 'Ubicación',    value: 'Puerto Rico 🇵🇷' },
  { label: 'Especialidad', value: 'Desarrollo Back-End' },
  { label: 'Email',        value: 'Jeremiemadera05@gmail.com' },
];

function SobreMi() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>01 — Sobre Mí</p>

        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.heading}>
              Apasionado por construir software que importa
            </h2>
            <div className={styles.paragraphs}>
              <p>Estudié un grado asociado en ciencias de programación en la Caribbean University, y actualmente curso un bachillerato en ciencias de computación en la Inter.</p>
              <p>Tengo 21 años y vivo en Puerto Rico. Me especializo en desarrollo back-end trabajando con tecnologías como C#, .NET, Java y SQL, siempre buscando aprender nuevas herramientas para mejorar mis habilidades.</p>
              <p>Desde pequeño quise programar. Mi objetivo es seguir creciendo profesionalmente y contribuir a proyectos que generen impacto real.</p>
            </div>
          </div>

          <div className={styles.infoCards}>
            {INFO_ITEMS.map((item) => (
              <div key={item.label} className={styles.infoCard}>
                <span className={styles.infoLabel}>{item.label}</span>
                <span className={styles.infoValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
