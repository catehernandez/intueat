import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import App from './App';
import rootReducer from './ducks';
import * as serviceWorker from './serviceWorker';

import './index.css';

//axios defaults
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
//dummy reducer for init setup only
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
