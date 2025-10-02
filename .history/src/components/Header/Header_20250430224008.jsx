import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={styles.headerContainer}>
      <motion.header
        className={styles.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#" className={styles.logo}>LB</a>
        <nav className={styles.nav}>
          <button 
            onClick={() => scrollToSection('projects')}
            className={styles.navLink}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('journey')}
            className={styles.navLink}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={styles.navLink}
          >
            Contact
          </button>
          <a href="/cv" className={styles.cvButton}>Get CV</a>
        </nav>
      </motion.header>
    </div>
  );
};

export default Header;