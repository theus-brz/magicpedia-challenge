import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';

import GlobalStyle from './styles/global';
import Routes from './routes';

// import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
);

export default App;
