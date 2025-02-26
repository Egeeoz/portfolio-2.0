import React from 'react';
import styles from './Hero.module.css';
import { GoArrowRight } from 'react-icons/go';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <h2>JAVASCRIPT DEVELOPER</h2>
      <span>Crafting Digital Experiences with Code and Creativity</span>
      <p>I build beautiful, responsive websites that bring ideas to life</p>
      <button>
        View My Work
        <GoArrowRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
