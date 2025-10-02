import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.1,
    margin: "100px 0px"
  });

  const projects = [
    {
      title: "Project 1",
      description: "A detailed description of the project goes here.",
      image: "/images/placeholder.svg",
      link: "https://example.com/project1"
    },
    {
      title: "Project 2",
      description: "Another project description.",
      image: "/images/placeholder.svg",
      link: "https://example.com/project2"
    },
    {
      title: "Project 3",
      description: "This project demonstrates the layout.",
      image: "/images/placeholder.svg",
      link: "https://example.com/project3"
    },
    {
      title: "Project 4",
      description: "Fourth project description.",
      image: "/images/placeholder.svg",
      link: "https://example.com/project4"
    },
    {
      title: "Project 5",
      description: "Fifth project description.",
      image: "/images/placeholder.svg",
      link: "https://example.com/project5"
    },
    {
      title: "Project 6",
      description: "Sixth project description.",
      image: "/images/placeholder.svg",
      link: "https://example.com/project6"
    }
  ];

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <motion.h2 
        className="sectionTitle" 
        data-text="Projects"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.3,
          type: "tween",
          ease: "easeOut"
        }}
        style={{
          willChange: 'transform, opacity'
        }}
      >
        Projects
      </motion.h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;