import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import ApplicationPage from './application_page/ApplicationPage';
import SearchPage from './application_page/pages/SearchPage';
class TradingTime extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/app/home' element={<ApplicationPage />} />
        <Route path='/app/search' element={<SearchPage />} />
      </Routes>
    );
  }
}

export default TradingTime;
