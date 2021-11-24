import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import HomePage from './application_page/pages/HomePage';
import SearchPage from './application_page/pages/SearchPage';
import Login from './landing_page/sections/Login';
import WalletPage from './application_page/pages/WalletPage';
class TradingTime extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/app/home' element={<HomePage />} />
        <Route path='/app/search' element={<SearchPage />} />
        <Route path='/app/wallet' element={<WalletPage />} />
        <Route path='/app/' element={<WalletPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    );
  }
}

export default TradingTime;
