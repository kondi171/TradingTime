import React, { Component }from 'react';
import '../../resources/scss/access_page/access_main.scss';
import { Link, Routes } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';
import WalletPage from './pages/WalletPage';

class ApplicationPage extends Component {
  
  render() {
    return (
      <>
        <nav className="app-nav">
            <Link to="/app/home" className="nav-option">Główny Panel</Link>
            <Link to="/app/favourites" className="nav-option">Ulubione</Link>
            <Link to="/app/wallet" className="nav-option">Portfel</Link>
            <Link to="#" className="nav-option">option</Link>
        </nav>
        {/* <HomePage /> */}
        <Routes>
        <Route path="/app/home" element={<HomePage />} />
          {/* <Route path="/app/favourites" element={<FavouritesPage />} /> */}
          {/* <Route path="/app/wallet" element={<WalletPage />} /> */}
        </Routes>
      </>
    );
  }
}

export default ApplicationPage;
