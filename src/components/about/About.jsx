import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <h1>About me</h1>
      <p className={styles.aboutText}>
        I'm a 24 year old fullstack developer at We Know IT, passionate about
        building meaningful and user friendly digital experiences. My
        development journey began with studies at Folkuniversitetet and has been
        strengthened through exciting hobby projects and my current professional
        work.
      </p>
      <p className={styles.aboutText}>
        I love diving deep into both frontend and backend, always with an eye on
        learning new technologies and methods to transform complex ideas into
        robust, efficient, and intuitive solutions. I thrive in agile workflows
        like Scrum and constantly strive to optimize for SEO.
      </p>
    </section>
  );
};

export default About;
