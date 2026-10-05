import { useState, memo } from 'react';
import styles from './Habilidades.module.css';

const SKILLS = [
  { name: 'C#',         img: 'https://img.icons8.com/color/96/c-sharp-logo.png',         color: '#9b59b6', category: 'Backend' },
  { name: '.NET',       img: 'https://img.icons8.com/color/96/net-framework.png',        color: '#512bd4', category: 'Backend' },
  { name: 'Node.js',    img: 'https://img.icons8.com/color/96/nodejs.png',               color: '#339933', category: 'Backend' },
  { name: 'Express',    img: 'https://img.icons8.com/fluency/96/express-js.png',         color: '#808080', category: 'Backend' },
  { name: 'PostgreSQL', img: 'https://img.icons8.com/color/96/postgreesql.png',          color: '#336791', category: 'Databases' },
  { name: 'SQL',        img: 'https://img.icons8.com/color/96/sql.png',                  color: '#336791', category: 'Databases' },
  { name: 'TypeScript', img: 'https://img.icons8.com/color/96/typescript.png',           color: '#3178c6', category: 'Frontend' },
  { name: 'React',      img: 'https://img.icons8.com/color/96/react-native.png',         color: '#61dafb', category: 'Frontend' },
  { name: 'JavaScript', img: 'https://img.icons8.com/color/96/javascript--v1.png',       color: '#f7df1e', category: 'Frontend' },
  { name: 'HTML',       img: 'https://img.icons8.com/color/96/html-5--v1.png',           color: '#e34f26', category: 'Frontend' },
  { name: 'CSS',        img: 'https://img.icons8.com/color/96/css3.png',                 color: '#264de4', category: 'Frontend' },
];

const SkillCard = memo(({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.cardHovered : ''}`}
      style={hovered ? { borderColor: skill.color + '55', boxShadow: `0 12px 32px ${skill.color}18` } : {}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={skill.img}
        alt={skill.name}
        width={52}
        height={52}
        className={`${styles.icon} ${hovered ? styles.iconHovered : ''}`}
        style={hovered ? { filter: `drop-shadow(0 4px 12px ${skill.color}66)` } : {}}
      />
      <div className={styles.info}>
        <span className={`${styles.name} ${hovered ? styles.nameHovered : ''}`}>{skill.name}</span>
        <span className={styles.category} style={hovered ? { color: skill.color } : {}}>{skill.category}</span>
      </div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

function Habilidades() {
  return (
    <>
      <div className={styles.divider} />
      <section id="habilidades" className={styles.section}>
        <div className={styles.container}>
          <p className={styles.label}>03 — Skills</p>
          <h2 className={styles.heading}>Tech Stack</h2>
          
          <div className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>Back-End</h3>
            <div className={styles.grid}>
              {SKILLS.filter(s => s.category === 'Backend').map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>Databases</h3>
            <div className={styles.grid}>
              {SKILLS.filter(s => s.category === 'Databases').map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>Front-End</h3>
            <div className={styles.grid}>
              {SKILLS.filter(s => s.category === 'Frontend').map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Habilidades);
