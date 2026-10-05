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
              Desarrollador Back-End con experiencia Full-Stack
            </h2>
            <div className={styles.paragraphs}>
              <p>Soy un desarrollador radicado en Puerto Rico, enfocado en el desarrollo Back-End y la arquitectura de bases de datos.</p>
              <p>Trabajo con el ecosistema de C# y .NET, pero también tengo experiencia desarrollando plataformas web completas utilizando TypeScript, React, Node.js, Express y PostgreSQL, incluyendo integraciones como pasarelas de pago (Stripe).</p>
              <p>Actualmente curso mi bachillerato en Ciencias de Computación en la Inter, tras completar un grado asociado en la Caribbean University. Mi meta es seguir resolviendo retos técnicos y aportar valor en proyectos que requieran soluciones eficientes y escalables.</p>
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
