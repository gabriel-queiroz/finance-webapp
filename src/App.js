import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyles from './styles/global';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>
);

export default App;
