import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import ApplicationPage from './application_page/ApplicationPage';
import HomePage from './application_page/pages/HomePage';
import SearchPage from './application_page/pages/SearchPage';
class TradingTime extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/app' element={<ApplicationPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </>
    );
  }
}

export default TradingTime;
