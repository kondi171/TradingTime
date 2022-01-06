import React from 'react';
import ReactDOM from 'react-dom';
import TradingTime from './components/TradingTime';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <TradingTime />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
