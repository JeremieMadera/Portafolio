import styles from './SobreMi.module.css';

function SobreMi() {
  return (
    <section className={styles.sobremiPage}>
      <div className={styles.container}>
        <h2 id="SobreMi">Sobre Mi</h2>
        <p>
          Soy Jeremie, estudie un grado asociado en ciencias de programacion en 
          la caribbean university, ahora estoy en la inter haciendo un 
          bachillerato en ciencias de computacion.
        </p>
        <p>
          Tengo 21 años y vivo en Puerto Rico. Soy un desarrollador apasionado por crear 
          soluciones tecnológicas eficientes y escalables. Me especializo en desarrollo 
          back-end, trabajando con tecnologías como C#, .NET, Java y SQL. Siempre estoy 
          buscando aprender nuevas herramientas y metodologías para mejorar mis habilidades 
          y aportar valor a cada proyecto en el que participo.
        </p>
        <p>
          Desde muy pequeño quise programar y con los estudios he podido aprender bastante 
          hasta ahora. Mi objetivo es seguir creciendo profesionalmente y contribuir al 
          desarrollo de aplicaciones que impacten positivamente a los usuarios.
        </p>
      </div>
    </section>
  );
}

export default SobreMi;