import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    image: '../../../public/images/blackjack.png',
    name: 'Blackjack Game',
    description:
      'A digital implementation of the classic casino game Blackjack, allowing users to play against a computer dealer in a browser-based environment',
    technologies: ['HTML', 'CSS', 'React', 'Typescript'],
  },
  {
    id: 2,
    image: '../../../public/images/unscmblr.png',
    name: 'Unscramblr',
    description: `A browser-based word game where players unscramble daily shuffled words to guess the correct answer, with features like a dynamic daily challenge, it's still a work in progress for additional features`,
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
    image: '../../../public/images/weatherapp.png',
    name: 'Weather Application',
    description:
      'An application that displays the current weather based on user searches, using an API to fetch the data',
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 4,
    image: '../../../public/images/portfolio.png',
    name: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects, skills, and contact information',
    technologies: ['HTML', 'CSS', 'Next.js', 'CD/CI'],
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectItem}>
          <div className={styles.projectImageContainer}>
            <img src={project.image} alt={`${project.name} Image`} />
          </div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
          <div className={styles.technologies}>
            {project.technologies.map((tech, i) => (
              <span key={i} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
