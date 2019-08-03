import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (true === true ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
