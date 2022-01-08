import React, { useState, useEffect, useContext } from 'react';

import HomePageFavourites from './HomePageFavourites';
import HomePageBought from './HomePageBought';
import HomePageDate from './HomePageDate';
import RestrictedInfo from '../../../features/RestrictedInfo';

import { AppContext } from '../../../../AppContext';

const HomePage = () => {
  // state = {
  //   time: 0,
  //   wallpaper: 0,
  //   restricted: false,
  //   actions: [
  //     {
  //       actionId: 0,
  //       isFavourite: true,
  //       isBought: true,
  //       image: allegro,
  //     },
  //     {
  //       actionId: 1,
  //       isFavourite: true,
  //       isBought: false,
  //       image: cdpsa,
  //     },
  //     {
  //       actionId: 2,
  //       isFavourite: false,
  //       isBought: false,
  //       image: '',
  //     },
  //     {
  //       actionId: 3,
  //       isFavourite: false,
  //       isBought: false,
  //       image: '',
  //     },
  //     {
  //       actionId: 4,
  //       isFavourite: false,
  //       isBought: false,
  //       image: '',
  //     },
  //     {
  //       actionId: 5,
  //       isFavourite: false,
  //       isBought: false,
  //       image: '',
  //     },
  //   ],
  // };

  const [restricted, setRestricted] = useState(false);
  const [favouriteActions, setFavouriteActions] = useState('');
  const [boughtActions, setBoughtActions] = useState('');

  const { userFavouriteActions } = useContext(AppContext);
  const { userBoughtActions } = useContext(AppContext);

  const { userSettings } = useContext(AppContext);
  const [currentWallpaper, setCurrentWallpaper] = useState();
  useEffect(() => setWallpaper(), [userSettings]);
  const setWallpaper = () => {
    const home = document.getElementById('home');
    if (Number(userSettings.wallpaper) === 1) {
      setCurrentWallpaper(1);
      home.classList.add('wallpaper1');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper3');
    }
    else if (Number(userSettings.wallpaper) === 2) {
      setCurrentWallpaper(2);
      home.classList.add('wallpaper2');
      home.classList.remove('wallpaper1');
      home.classList.remove('wallpaper3');
    }
    else {
      setCurrentWallpaper(3);
      home.classList.add('wallpaper3');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper1');
    }
  }

  const [currentTheme, setCurrentTheme] = useState();
  useEffect(() => setTheme(), [userSettings]);
  const setTheme = () => {

    if (Number(userSettings.theme) === 1) {
      setCurrentTheme(1);
      document.documentElement.style.setProperty('--bg-color', '#333333');
      document.documentElement.style.setProperty('--box-color', '#858484');
      document.documentElement.style.setProperty('--text-color', '#c4c4c4');
      document.documentElement.style.setProperty('--active-color', '#3d84f5');
      document.documentElement.style.setProperty('--hover-color', '#555555');
    }
    else if (Number(userSettings.theme) === 2) {
      setCurrentTheme(2);
      document.documentElement.style.setProperty('--bg-color', '#1F3336');
      document.documentElement.style.setProperty('--box-color', '#038C3E');
      document.documentElement.style.setProperty('--text-color', '#cdf5c5');
      document.documentElement.style.setProperty('--active-color', '#038C3E');
      document.documentElement.style.setProperty('--hover-color', '#77BF63');
    }
    else {
      setCurrentTheme(3);
      document.documentElement.style.setProperty('--bg-color', '#191919');
      document.documentElement.style.setProperty('--box-color', '#FFCD00');
      document.documentElement.style.setProperty('--text-color', '#FFFFFF');
      document.documentElement.style.setProperty('--active-color', '#FFCD00');
      document.documentElement.style.setProperty('--hover-color', '#b69917');
    }
  }



  useEffect(
    () => setFavouriteActions(userFavouriteActions),
    [userFavouriteActions]
  );
  useEffect(() => setBoughtActions(userBoughtActions), [userBoughtActions]);

  return (
    <main id='home' className='home-page'>
      {restricted && <RestrictedInfo />}
      <HomePageFavourites actions={favouriteActions} />
      <HomePageDate />
      <HomePageBought actions={boughtActions} />
    </main>
  );
};

export default HomePage;
