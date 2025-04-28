import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <h1>About me</h1>
      <p className={styles.aboutText}>
        I’m a 24 year old aspiring full stack developer currently doing an
        internship at We Know It. I’m studying JavaScript development at
        Folkuniversitetet, where I’ve gained a solid understanding of both
        frontend and backend development. I’ve worked with HTML, CSS,
        JavaScript, React, Node.js, Next.js, DynamoDB, Firebase, and AWS, and
        I’m familiar with agile methods like Scrum and SEO focused web
        development.
      </p>
      <p className={styles.aboutText}>
        I’m passionate about creating visually appealing websites and diving
        deeper into frontend development. At the same time, I’m excited to
        expand my backend skills to confidently handle full stack projects. I
        love working in teams where creativity and feedback are key to growth.
      </p>
    </section>
  );
};

export default About;
