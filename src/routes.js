import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import List from './pages/List';
import Erro404 from './pages/Erro404';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />)
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/list" component={List} />
      <Route exact path="*" component={Erro404} />
    </Switch>
  </BrowserRouter>
);

PrivateRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default Routes;
