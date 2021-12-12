import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import HomePage from './application_page/pages/HomePage';
import SearchPage from './application_page/pages/SearchPage';
import Login from './landing_page/sections/Login';
import Register from './landing_page/sections/Register';
import WalletPage from './application_page/pages/WalletPage';
// import AccountPage from './application_page/pages/AccountPage';
import HelpPage from './application_page/pages/HelpPage';
import ErrorPage from './application_page/pages/ErrorPage';
import Logout from './application_page/Logout';
import MainLayout from './application_page/MainLayout';
import SettingsPage from './application_page/pages/SettingsPage';
import UserSettingsPage from './application_page/pages/UserSettingsPage';
import AppSettingsPage from './application_page/pages/AppSettingsPage';
import WalletSettingsPage from './application_page/pages/WalletSettingsPage';
import MarketplacePage from './application_page/pages/MarketPlacePage';

class TradingTime extends React.Component {
  isLogged = true;
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {this.isLogged ? (
            <Route path='app' element={<MainLayout />}>
              <Route path='home' element={<HomePage />} />
              <Route path='/app/search' element={<SearchPage />} />
              <Route path='/app/wallet' element={<WalletPage />} />
              <Route
                path='/app/marketplace/:actionId'
                element={<MarketplacePage />}
                component={<MarketplacePage />}
              />
              <Route
                path='/app/marketplace'
                element={<MarketplacePage />}
                component={<MarketplacePage />}
              />
              <Route path='/app/options' element={<SettingsPage />}>
                <Route
                  path='/app/options/userpreferences'
                  element={<UserSettingsPage />}
                />
                <Route
                  path='/app/options/applicationpreferences'
                  element={<AppSettingsPage />}
                />
                <Route
                  path='/app/options/walletpreferences'
                  element={<WalletSettingsPage />}
                />
              </Route>
              <Route path='/app/preferences/help' element={<HelpPage />} />
              <Route path='/app/preferences/logout' element={<Logout />} />
            </Route>
          ) : (
            <Route path='app/*' exact element={<Login />} />
          )}

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' exact element={<ErrorPage />} />
        </Routes>
      </>
    );
  }
}

export default TradingTime;
