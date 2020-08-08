import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { UsersSelectors } from '../../redux/users';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import Authenticated from '../Authenticated';
import styles from './AppBar.module.css';
import Container from '../Container';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.AppBar}>
    <Container>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <Authenticated />}
    </Container>
  </header>
);

AppBar.propTypes = {
  isAuthenticated: T.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: UsersSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
