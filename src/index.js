import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const theme = {
  color: {
    background: '#ffff',
  },
};
ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <BrowserRouter>
      <Provider store={ store }>
        <Reset />
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
