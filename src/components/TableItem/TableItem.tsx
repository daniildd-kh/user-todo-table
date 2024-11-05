import React from 'react';
import People from '../../assets/icons/people.svg';
import styles from './styles.module.css';

interface TableItemProps {
  title: string;
  text: string;
}

const TableItem: React.FC<TableItemProps> = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <People />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default TableItem;
