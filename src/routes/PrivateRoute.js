import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { UsersSelectors } from '../redux/users';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    // eslint-disable-next-line
    {...routeProps}
    render={props =>
      // eslint-disable-next-line
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

PrivateRoute.propTypes = {
  component: T.elementType.isRequired,
  isAuthenticated: T.bool.isRequired,
  redirectTo: T.string.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: UsersSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
