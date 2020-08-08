import React from 'react';
import T from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { BasePathRoute } from '../../routes';
import styles from './Navigation.module.css';
import { UsersSelectors } from '../../redux/users';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <ul className={styles.List}>
      <li className={styles.Item}>
        <NavLink
          exact
          to={BasePathRoute.home}
          className={styles.Link}
          activeClassName={styles.Active}
        >
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li className={styles.Item}>
          <NavLink
            to={BasePathRoute.contacts}
            className={styles.Link}
            activeClassName={styles.Active}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: T.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: UsersSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
