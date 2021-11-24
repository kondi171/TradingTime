import React from 'react';
import ReactDOM from 'react-dom';
import TradingTime from './components/TradingTime';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TradingTime />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);