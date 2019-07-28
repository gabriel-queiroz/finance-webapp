import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import React from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from '../components/Loading';

const Loading = ({ error, retry, pastDelay }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  }
  if (pastDelay) {
    return <LoadingComponent />;
  }
  return null;
};

const Login = Loadable({
  loader: () => import('../pages/Login'),
  loading: Loading,
  delay: 1,
});

const Dashboard = Loadable({
  loader: () => import('../components/Drawer'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

const Transactions = Loadable({
  loader: () => import('../pages/Transactions'),
  loading: Loading,
});

const Accounts = Loadable({
  loader: () => import('../pages/Accounts'),
  loading: Loading,
});

const RouteNest = props => (
  <Route
    exact={props.exact}
    path={props.path}
    render={p => <props.component {...p} children={props.children} />}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (true === true ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <RouteNest path="/" component={Dashboard}>
        <PrivateRoute exact path="/transacoes" component={Transactions} />
        <PrivateRoute exact path="/contas" component={Accounts} />
        <PrivateRoute exact path="/" component={Home} />
      </RouteNest>
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
