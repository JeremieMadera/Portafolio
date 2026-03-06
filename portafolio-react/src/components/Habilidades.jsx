import { memo, useMemo } from 'react';
import styles from './Habilidades.module.css';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const skills = [
  { name: 'C#', icon: TbBrandCSharp, alt: 'logo de c#', color: '#239120' },
  { name: '.NET', icon: SiDotnet, alt: 'logo de .net', color: '#512BD4' },
  { name: 'Java', icon: FaJava, alt: 'logo de java', color: '#007396' },
  { name: 'SQL', icon: FaDatabase, alt: 'logo de sql', color: '#4479A1' },
  { name: 'HTML', icon: FaHtml5, alt: 'logo de html', color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, alt: 'logo de css', color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, alt: 'logo de javascript', color: '#F7DF1E' }
];

const SkillCard = memo(({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className={styles.foto}>
      <IconComponent 
        className={styles.skillIcon} 
        aria-label={skill.alt}
        style={{ color: skill.color }}
      />
      <span className={styles.skillName}>{skill.name}</span>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

function Habilidades() {
  return (
    <section className={styles.habilidadesPage}>
      <div className={styles.spanLogos}>
        <h2 id="Habilidades">Habilidades</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Habilidades);
