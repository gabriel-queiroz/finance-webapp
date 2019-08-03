import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import React from 'react';
import Loadable from 'react-loadable';
import {Loading, LoadingDashboard} from './LoadingRoute';
import NestedRoute from './NestedRoute';
import PrivateRoute from './PrivateRoute';


const Login = Loadable({
  loader: () => import('../pages/Login'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('../components/Drawer'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: LoadingDashboard,
});

const Transactions = Loadable({
  loader: () => import('../pages/Transactions'),
  loading: LoadingDashboard,
});

const Accounts = Loadable({
  loader: () => import('../pages/Accounts'),
  loading: LoadingDashboard,
});


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <NestedRoute path="/" component={Dashboard}>
        <PrivateRoute exact path="/transacoes" component={Transactions} />
        <PrivateRoute exact path="/contas" component={Accounts} />
        <PrivateRoute exact path="/" component={Home} />
      </NestedRoute>
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
