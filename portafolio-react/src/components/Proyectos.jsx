import { useState, memo } from 'react';
import styles from './Proyectos.module.css';

const PROJECTS = [
  {
    title: 'Portafolio Web',
    description: 'Sitio web personal para mostrar mis proyectos, habilidades y experiencia como desarrollador back-end.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: '#',
    status: 'live',
  },
  {
    title: 'Próximamente',
    description: 'Proyecto en desarrollo. Nuevas funcionalidades y tecnologías en camino.',
    tags: [],
    link: null,
    status: 'soon',
  },
  {
    title: 'Próximamente',
    description: 'Proyecto en desarrollo. Nuevas funcionalidades y tecnologías en camino.',
    tags: [],
    link: null,
    status: 'soon',
  },
];

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const ProjectCard = memo(({ project }) => {
  const [hovered, setHovered] = useState(false);

  if (project.status === 'soon') {
    return (
      <div className={styles.cardSoon}>
        <span className={styles.badgeSoon}>EN DESARROLLO</span>
        <p className={styles.soonText}>Próximamente</p>
      </div>
    );
  }

  return (
    <div
      className={`${styles.card} ${hovered ? styles.cardHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.cardTop}>
        <span className={styles.badgeLive}>LIVE</span>
        {project.link && (
          <a href={project.link} className={styles.externalLink}>
            <ExternalLinkIcon />
          </a>
        )}
      </div>
      <div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>
      {project.tags.length > 0 && (
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

function Proyectos() {
  return (
    <>
      <div className={styles.divider} />
      <section id="proyectos" className={styles.section}>
        <div className={styles.container}>
          <p className={styles.label}>02 — Proyectos</p>
          <h2 className={styles.heading}>Trabajo seleccionado</h2>
          <div className={styles.grid}>
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Proyectos);
