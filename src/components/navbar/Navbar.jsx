import styles from './Navbar.module.css';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav>
      <h1>EÖ</h1>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <FiLinkedin size={20} />
        </li>
        <li>
          <FiGithub size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
