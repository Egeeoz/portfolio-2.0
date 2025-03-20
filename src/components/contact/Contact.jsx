import styles from './Contact.module.css';
import { FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
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
        <a href="">
          <FiGithub size={25} />
        </a>
        <a href="">
          <FiLinkedin size={25} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
