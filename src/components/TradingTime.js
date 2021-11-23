import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import ApplicationPage from './application_page/ApplicationPage';
import HomePage from './application_page/pages/HomePage';
class TradingTime extends React.Component {
  render() {
    return (
      <>
      <Router basename="app">
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/app/favourites" element={<FavouritesPage />} /> */}
            {/* <Route path="/app/wallet" element={<WalletPage />} /> */}
          </Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/app' element={<ApplicationPage />} /> 
          
        </Routes>
        </>
    );
  }
}

export default TradingTime;
