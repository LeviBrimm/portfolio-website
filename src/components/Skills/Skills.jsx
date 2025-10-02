import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
  const coreStack = [
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'AWS (EC2, S3, RDS)', icon: '/icons/aws.svg' },
    { name: 'Express.js', icon: '/icons/express.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    { name: 'Git & GitHub', icon: '/icons/github.svg' },
  ];

  const experienced = [
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Prisma', icon: '/icons/prisma.svg' },
    { name: 'REST APIs', icon: '/icons/api.svg' },
    { name: 'SCSS', icon: '/icons/sass.svg' },
    { name: 'JavaScript / TypeScript', icon: '/icons/typescript.svg' },
    { name: 'GitHub Actions', icon: '/icons/github.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
  ];

  const learning = [
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
  ];

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div className={styles.section}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            data-text="Core Stack"
          >
            Core Stack
          </motion.h2>
          <div className={styles.skillGrid}>
            {coreStack.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <img src={skill.icon} alt={skill.name} className={styles.icon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.section}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            data-text="Experienced With"
          >
            Experienced With
          </motion.h2>
          <div className={styles.skillGrid}>
            {experienced.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <img src={skill.icon} alt={skill.name} className={styles.icon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.section}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            data-text="Currently Learning"
          >
            Currently Learning
          </motion.h2>
          <div className={styles.skillGrid}>
            {learning.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <img src={skill.icon} alt={skill.name} className={styles.icon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 