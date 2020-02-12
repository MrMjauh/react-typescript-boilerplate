import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);
