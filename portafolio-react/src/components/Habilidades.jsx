import { useState, memo } from 'react';
import styles from './Habilidades.module.css';

const SKILLS = [
  { name: 'C#',         img: 'https://img.icons8.com/color/96/c-sharp-logo.png',        color: '#9b59b6', category: 'Backend' },
  { name: '.NET',       img: 'https://img.icons8.com/color/96/net-framework.png',        color: '#512bd4', category: 'Backend' },
  { name: 'Java',       img: 'https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png', color: '#e76f00', category: 'Backend' },
  { name: 'SQL',        img: 'https://img.icons8.com/color/96/sql.png',                  color: '#336791', category: 'Backend' },
  { name: 'HTML',       img: 'https://img.icons8.com/color/96/html-5--v1.png',           color: '#e34f26', category: 'Frontend' },
  { name: 'CSS',        img: 'https://img.icons8.com/color/96/css3.png',                 color: '#264de4', category: 'Frontend' },
  { name: 'JavaScript', img: 'https://img.icons8.com/color/96/javascript--v1.png',       color: '#f7df1e', category: 'Frontend' },
  { name: 'React',      img: 'https://img.icons8.com/color/96/react-native.png',         color: '#61dafb', category: 'Frontend' },
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
          <p className={styles.label}>03 — Habilidades</p>
          <h2 className={styles.heading}>Stack tecnológico</h2>
          <div className={styles.grid}>
            {SKILLS.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Habilidades);
