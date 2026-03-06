import { memo } from 'react';
import styles from './Proyectos.module.css';

const projects = [
  {
    id: 1,
    title: 'Portafolio Web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  { id: 2, title: 'Próximamente', technologies: [] },
  { id: 3, title: 'Próximamente', technologies: [] },
  { id: 4, title: 'Próximamente', technologies: [] },
  { id: 5, title: 'Próximamente', technologies: [] },
  { id: 6, title: 'Próximamente', technologies: [] }
];

const ProjectCard = memo(({ project }) => (
  <div className={styles.projectCard}>
    <div className={styles.infoCar}>
      <h3>{project.title}</h3>
      {project.technologies.length > 0 && (
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

function Proyectos() {
  return (
    <section className={styles.proyectosPage}>
      <h2 id="Proyectos">Proyectos</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default memo(Proyectos);
