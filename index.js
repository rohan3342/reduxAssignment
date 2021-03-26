import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import rootReducer from './src/services/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const STORE = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk),
);

const RootApp = () => (
  <Provider store={STORE}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootApp);
