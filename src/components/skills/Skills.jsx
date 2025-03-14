import styles from './Skills.module.css';
import { IoCodeOutline } from 'react-icons/io5';
import { FiServer } from 'react-icons/fi';
import { GoDatabase } from 'react-icons/go';
import { FaFigma } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <h1 className={styles.skillsTitle}>Skills</h1>
      <section className={styles.skills}>
        <div className={styles.skillItem}>
          <IoCodeOutline size={25} />
          <h1>
            Frontend
            <br />
            Development
          </h1>
          <p>HTML, CSS, JavaScript, TypeScript, React, Next.Js, Tailwind</p>
        </div>
        <div className={styles.skillItem}>
          <FiServer size={25} />
          <h1>
            Backend
            <br />
            Development
          </h1>
          <p>Node.js, Express</p>
        </div>
        <div className={styles.skillItem}>
          <GoDatabase size={25} />
          <h1>Databases</h1>
          <p>DynamoDB, Firestore, MySQL, SQlite</p>
        </div>
        <div className={styles.skillItem}>
          <FaFigma size={25} />
          <h1>Design</h1>
          <p>Figma, UI/UX Principles</p>
        </div>
      </section>
    </section>
  );
};

export default Skills;
