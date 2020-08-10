import React from 'react';
import Section from '../components/Section';
import image from './welcome.gif';
import styles from './HomeView.module.css';

const HomeView = () => (
  <Section title="HomePage">
    <img src={image} alt="welcome" className={styles.Image} />
  </Section>
);

export default HomeView;
