import React from 'react';
import styles from './styles.module.css';

const Intro = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>User To-Do Table</h1>
      <p className={styles.subtitle}>User task table for effective planning.</p>
    </header>
  );
};

export default Intro;
