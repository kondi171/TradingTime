import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import ApplicationPage from './application_page/ApplicationPage';
<<<<<<< HEAD
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
=======
class TradingTime extends React.Component {
  render() {
    return (
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/app/home' element={<ApplicationPage />} /> 
        </Routes>
>>>>>>> 174c09403e31b7232f83eb5e8ee89337c72dfef0
    );
  }
}

export default TradingTime;
