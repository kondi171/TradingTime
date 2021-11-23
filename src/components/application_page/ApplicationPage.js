import React, { Component } from 'react';
import '../../resources/scss/access_page/access_main.scss';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';
import WalletPage from './pages/WalletPage';

class ApplicationPage extends Component {
<<<<<<< HEAD
=======

>>>>>>> 174c09403e31b7232f83eb5e8ee89337c72dfef0
  render() {
    return (
      <>
        <nav className='app-nav'>
          <Link to='/app/home' className='nav-option'>
            Główny Panel
          </Link>
          <Link to='/app/favourites' className='nav-option'>
            Ulubione
          </Link>
          <Link to='/app/wallet' className='nav-option'>
            Portfel
          </Link>
          <Link to='#' className='nav-option'>
            option
          </Link>
        </nav>
<<<<<<< HEAD

        <Routes>
          <Route path='/home' exact element={<HomePage />} />
=======
        <HomePage />
        <Routes>
          <Route path="/app/home" element={<HomePage />} />
          <Route path="/app/favourites" element={<FavouritesPage />} />
          <Route path="/app/wallet" element={<WalletPage />} />
>>>>>>> 174c09403e31b7232f83eb5e8ee89337c72dfef0
        </Routes>
      </>
    );
  }
}

export default ApplicationPage;
