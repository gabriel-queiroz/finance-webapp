import { Route } from 'react-router-dom';
import React from 'react';

const NestedRoute = props => (
  <Route
    exact={props.exact}
    path={props.path}
    render={component => <props.component {...component}>{props.children}</props.component>}
  />
);

export default NestedRoute;
