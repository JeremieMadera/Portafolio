import styles from './SobreMi.module.css';

const INFO_ITEMS = [
  { label: 'Education',    value: 'Inter — B.S. Computer Science' },
  { label: 'Location',     value: 'Puerto Rico 🇵🇷' },
  { label: 'Specialty',    value: 'Back-End Development' },
  { label: 'Email',        value: 'Jeremiemadera05@gmail.com' },
];

function SobreMi() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>01 — About Me</p>

        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.heading}>
              Back-End Developer with Full-Stack Experience
            </h2>
            <div className={styles.paragraphs}>
              <p>I am a developer based in Puerto Rico, focused on Back-End development and database architecture.</p>
              <p>I work with the C# and .NET ecosystem, but I also have experience developing complete web platforms using TypeScript, React, Node.js, Express, and PostgreSQL, including integrations like payment gateways (Stripe).</p>
              <p>I am currently pursuing my bachelor's degree in Computer Science at Inter, having completed an associate degree at Caribbean University. My goal is to continue solving technical challenges and adding value to projects that require efficient and scalable solutions.</p>
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
