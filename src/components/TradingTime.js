import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import HomePage from './application_page/pages/home/HomePage';
import SearchPage from './application_page/pages/search/SearchPage';
import LoginPage from './landing_page/access_sections/LoginPage';
import RegisterPage from './landing_page/access_sections/RegisterPage';
import WalletPage from './application_page/pages/wallet/WalletPage';
import HelpPage from './application_page/pages/HelpPage';
import ErrorPage from './application_page/pages/ErrorPage';
import Logout from './application_page/Logout';
import MainLayout from './application_page/MainLayout';
import SettingsPage from './application_page/pages/options/SettingsPage';
import UserSettingsPage from './application_page/pages/options/UserSettingsPage';
import AppSettingsPage from './application_page/pages/options/AppSettingsPage';
import AdminOptionsPage from './application_page/pages/options/AdminOptionsPage';
import WalletSettingsPage from './application_page/pages/options/WalletSettingsPage';
import MarketplacePage from './application_page/pages/marketplace/MarketPlacePage';
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
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' exact element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default TradingTime;
