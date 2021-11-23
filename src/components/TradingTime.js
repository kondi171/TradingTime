import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import ApplicationPage from './application_page/ApplicationPage';
class TradingTime extends React.Component {
  render() {
    return (
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/app/home' element={<ApplicationPage />} /> 
        </Routes>
    );
  }
}

export default TradingTime;
