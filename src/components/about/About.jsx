import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <h1>About me</h1>
      <p className={styles.aboutText}>
        I’m a 24 year old fullstack developer currently working at We Know IT.
        My strong foundation in both frontend and backend development comes from
        my studies at Folkuniversitetet, experience from personal hobby
        projects, and my professional work. I have experience with HTML, CSS,
        JavaScript, React, Node.js, Next.js, DynamoDB, Firebase, and AWS, I’m
        also familiar with agile methods like Scrum and SEO focused web
        development.
      </p>
      <p className={styles.aboutText}>
        I’m passionate about creating visually appealing websites and diving
        deeper into frontend development. At the same time, I’m excited to
        expand my backend skills to confidently handle fullstack projects. I
        love working in teams where creativity and feedback are key to growth.
      </p>
    </section>
  );
};

export default About;
