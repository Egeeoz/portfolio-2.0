import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { FiLinkedin, FiGithub, FiX } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={isScrolled ? styles.scrolled : ''}>
      <div className={styles.hamburger}>
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IoMdClose size={25} /> : <IoMenu size={25} />}
        </button>
      </div>

      <ul className={styles.leftNavLinks}>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <h1 className={styles.name}>Ege Özakdemir</h1>

      <ul className={styles.rightNavLinks}>
        <li>
          <a
            href="https://www.linkedin.com/in/ege-%C3%B6zakdemir-4422b8313/"
            target="_blank"
          >
            <FiLinkedin size={23} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Egeeoz" target="_blank">
            <FiGithub size={23} />
          </a>
        </li>
      </ul>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
