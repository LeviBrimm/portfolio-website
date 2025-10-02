import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Journey.module.css';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="journey" className={styles.journey} ref={ref}>
      <motion.h2 
        className="sectionTitle" 
        data-text="My Coding Journey"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        My Coding Journey
      </motion.h2>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.description}>
            Type coding journey here
          </p>
          
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/zJSY8tbf_ys"
              title="My Coding Journey"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey; 