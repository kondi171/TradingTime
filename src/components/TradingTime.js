import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import HomePage from './application_page/pages/HomePage';
import SearchPage from './application_page/pages/SearchPage';
import LoginPage from './landing_page/sections/LoginPage';
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
import AdminOptionsPage from './application_page/pages/AdminOptionsPage';
import WalletSettingsPage from './application_page/pages/WalletSettingsPage';
import MarketplacePage from './application_page/pages/MarketPlacePage';
import { AppContext } from '../AppContext';

const TradingTime = () => {
  const { isUserLogged } = useContext(AppContext);

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {isUserLogged ? (
          <Route path='app' element={<MainLayout />}>
            <Route path='/app' exact element={<HomePage />} />
            <Route path='/app/home' element={<HomePage />} />
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
              <Route
                path='/app/options/adminoptions'
                element={<AdminOptionsPage />}
              />
            </Route>
            <Route path='/app/preferences/help' element={<HelpPage />} />
            <Route path='/app/preferences/logout' element={<Logout />} />
          </Route>
        ) : (
          <Route path='app/*' exact element={<Navigate to='/login' />} />
        )}

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' exact element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default TradingTime;
