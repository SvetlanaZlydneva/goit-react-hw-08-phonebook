import React, { Suspense, lazy, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import T from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '../AppBar';
import Loader from '../Loader';
import { BasePathRoute, PrivateRoute, PublicRoute } from '../../routes';
import { UsersOperations } from '../../redux/users';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "contacts-view" */),
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-view" */),
);

class App extends Component {
  static propTypes = {
    onGetCurrentUser: T.func.isRequired,
  };

  componentDidMount() {
    const { onGetCurrentUser } = this.props;
    onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={BasePathRoute.home} component={HomeView} />
            <PublicRoute
              restricted
              path={BasePathRoute.register}
              component={RegisterView}
              redirectTo={BasePathRoute.contacts}
            />
            <PublicRoute
              restricted
              path={BasePathRoute.login}
              component={LoginView}
              redirectTo={BasePathRoute.contacts}
            />
            <PrivateRoute
              path={BasePathRoute.contacts}
              component={ContactsView}
              redirectTo={BasePathRoute.login}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: UsersOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
