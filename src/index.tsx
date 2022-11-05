import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// replace console.* for disable log on production
if (process.env.NODE_ENV === 'production') {
  console.log = () => null;
  console.error = () => null;
  console.debug = () => null;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
