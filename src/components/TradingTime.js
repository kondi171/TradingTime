import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import ApplicationPage from './application_page/ApplicationPage';
import SearchPage from './application_page/pages/SearchPage';
import Login from './landing_page/Login';
import WalletPage from './application_page/pages/WalletPage';
class TradingTime extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/app/home' element={<ApplicationPage />} />
        <Route path='/app/search' element={<SearchPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app/wallet' element={<WalletPage />} />
      </Routes>
    );
  }
}

export default TradingTime;
