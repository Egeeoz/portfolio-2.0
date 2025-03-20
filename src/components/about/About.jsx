import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <h1>About me</h1>
      <p className={styles.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        eligendi, assumenda aliquid dolores incidunt, possimus repudiandae ut
        sequi iste amet nobis corrupti fuga quia aspernatur, voluptatum
        perspiciatis quidem pariatur ratione!
      </p>
    </section>
  );
};

export default About;
