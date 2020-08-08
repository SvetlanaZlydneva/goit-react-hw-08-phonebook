import React from 'react';
import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.Loader}>
    <Spinner
      type="BallTriangle"
      color="#3f51b5"
      height={80}
      width={80}
      timeout={3000}
    />
  </div>
);

export default Loader;
