import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import HomePage from './application_page/pages/HomePage';
import SearchPage from './application_page/pages/SearchPage';
import Login from './landing_page/sections/Login';
import Register from './landing_page/sections/Register';
import WalletPage from './application_page/pages/WalletPage';
import AccountPage from './application_page/pages/AccountPage';
import HelpPage from './application_page/pages/HelpPage';
import ErrorPage from './application_page/pages/ErrorPage';
import Logout from './application_page/Logout';
class TradingTime extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/app/home' element={<HomePage />} />
        <Route path='/app/search' element={<SearchPage />} />
        <Route path='/app/wallet' element={<WalletPage />} />
        <Route path='/app/preferences/account' element={<AccountPage />} />
        <Route path='/app/preferences/help' element={<HelpPage />} />
        <Route path='/app/preferences/logout' element={<Logout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    );
  }
}

export default TradingTime;
