import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import { FaChevronDown } from 'react-icons/fa6';

const Hero = () => {
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
          heroContentRef.current.style.opacity = Math.max(
            1 - scrollPosition / 300,
            0
          ).toString();
          heroContentRef.current.style.transform = `translateY(${
            scrollPosition * -0.2
          }px)`;
        } else {
          heroContentRef.current.style.opacity = '1';
          heroContentRef.current.style.transform = 'translateY(0)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent} ref={heroContentRef}>
        <h1>ege özakdemir</h1>
        <h2>javascript developer</h2>
      </div>
      <a href="#projects">
        <FaChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
