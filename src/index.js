import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
// import LandingPage from './components/landing page/LandingPage';
>>>>>>> 319f3626b022c247dae6df4361b811add6a09bcb
import TradingTime from './components/TradingTime';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TradingTime />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
