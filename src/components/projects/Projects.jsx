import { useRef } from 'react';
import styles from './Projects.module.css';
import { RiGitRepositoryLine } from 'react-icons/ri';
import blackjack from '../../images/blackjack.png';
import unscramblr from '../../images/unscmblr.png';
import weatherApp from '../../images/weatherapp.png';
import portfolio from '../../images/portfolio.png';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    image: blackjack,
    name: 'Blackjack Game',
    description:
      'A digital implementation of the classic casino game Blackjack, allowing users to play against a computer dealer in a browser-based environment',
    link: 'https://egeeoz.github.io/Blackjack/',
    github: 'https://github.com/Egeeoz/Blackjack',
    technologies: ['HTML', 'CSS', 'React', 'Typescript'],
  },
  {
    id: 2,
    image: unscramblr,
    name: 'Unscramblr',
    description: `A browser-based word game where players unscramble daily shuffled words to guess the correct answer, with features like a dynamic daily challenge, it's still a work in progress for additional features`,
    link: 'https://www.unscramblr.com/',
    github: 'https://github.com/Egeeoz/Unscramblr',
    technologies: [
      'HTML',
      'CSS',
      'React',
      'Typescript',
      'DynamoDB',
      'Serverless',
      'Lambda',
      'CD/CI',
    ],
  },
  {
    id: 3,
    image: weatherApp,
    name: 'Weather Application',
    description:
      'An application that displays the current weather based on user searches, using an API to fetch the data',
    link: 'https://weatherappege.surge.sh/',
    github: 'https://github.com/Egeeoz/Weather_App',
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 4,
    image: portfolio,
    name: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects, skills, and contact information',
    link: 'https://github.com/Egeeoz/portfolio-2.0',
    github: 'https://github.com/Egeeoz/portfolio-2.0',
    technologies: ['HTML', 'CSS', 'React', 'CD/CI'],
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      {projects.map((project) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
        return (
          <motion.a
            ref={ref}
            key={project.id}
            href={project.link}
            target="_blank"
            className={styles.projectItem}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className={styles.projectImageContainer}>
              <img src={project.image} alt={`${project.name} Image`} />
            </div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className={styles.projectFooter}>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                className={styles.githubLink}
                onClick={(e) => e.stopPropagation()} // Prevents clicking on the project from also opening GitHub
              >
                <RiGitRepositoryLine size={24} />
              </a>
            </div>
          </motion.a>
        );
      })}
    </section>
  );
};

export default Projects;
