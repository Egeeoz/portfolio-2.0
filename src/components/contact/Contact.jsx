import styles from './Contact.module.css';
import { FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';

const Contact = () => {
  return (
    <section className={styles.contactContainer} id="contact">
      <h1 className={styles.contactTitle}>Contact</h1>
      <div className={styles.contactInfo}>
        <p>
          <IoMailOutline />
          ozakdemirege@hotmail.com
        </p>
        <p>
          <FiPhone />
          072 018 25 03
        </p>
        <p>
          <SlLocationPin />
          Sweden, Stockholm
        </p>
      </div>
      <div className={styles.contactLinks}>
        <a href="https://github.com/Egeeoz" target="_blank">
          <FiGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/ege-%C3%B6zakdemir-4422b8313/"
          target="_blank"
        >
          <FiLinkedin size={25} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
