import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? styles.scrolled : ''}>
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
