import React, { useState, useEffect, useContext } from 'react';

import HomePageFavourites from './HomePageFavourites';
import HomePageBought from './HomePageBought';
import HomePageDate from './HomePageDate';
import RestrictedInfo from '../../../features/RestrictedInfo';

import { AppContext } from '../../../../AppContext';
import LoadingBar from '../../../features/LoadingBar';

const HomePage = () => {
  const [restricted, setRestricted] = useState(false);
  const [favouriteActions, setFavouriteActions] = useState('');
  const [boughtActions, setBoughtActions] = useState('');
  const [currentWallpaper, setCurrentWallpaper] = useState('');
  const [currentTheme, setCurrentTheme] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const { userFavouriteActions } = useContext(AppContext);
  const { userBoughtActions } = useContext(AppContext);

  const { userSettings } = useContext(AppContext);

  const checkIfDataIsLoaded = () => {
    if (currentWallpaper !== '' && currentTheme !== '') setIsLoaded(true);
  };

  const setWallpaper = () => {
    const home = document.getElementById('home');
    if (Number(userSettings.wallpaper) === 1) {
      setCurrentWallpaper(1);
      home.classList.add('wallpaper1');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper3');
    } else if (Number(userSettings.wallpaper) === 2) {
      setCurrentWallpaper(2);
      home.classList.add('wallpaper2');
      home.classList.remove('wallpaper1');
      home.classList.remove('wallpaper3');
    } else {
      setCurrentWallpaper(3);
      home.classList.add('wallpaper3');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper1');
    }
  };

  const setTheme = () => {
    if (Number(userSettings.theme) === 1) {
      setCurrentTheme(1);
      document.documentElement.style.setProperty('--bg-color', '#333333');
      document.documentElement.style.setProperty('--box-color', '#858484');
      document.documentElement.style.setProperty('--text-color', '#c4c4c4');
      document.documentElement.style.setProperty('--active-color', '#3d84f5');
      document.documentElement.style.setProperty('--hover-color', '#555555');
      document.documentElement.style.setProperty('--darken-effect', '#a8a8a8');
    } else if (Number(userSettings.theme) === 2) {
      setCurrentTheme(2);
      document.documentElement.style.setProperty('--bg-color', '#1F3336');
      document.documentElement.style.setProperty('--box-color', '#038C3E');
      document.documentElement.style.setProperty('--text-color', '#cdf5c5');
      document.documentElement.style.setProperty('--active-color', '#038C3E');
      document.documentElement.style.setProperty('--hover-color', '#77BF63');
      document.documentElement.style.setProperty('--darken-effect', '#adf79e');
    } else {
      setCurrentTheme(3);
      document.documentElement.style.setProperty('--bg-color', '#191919');
      document.documentElement.style.setProperty('--box-color', '#FFCD00');
      document.documentElement.style.setProperty('--text-color', '#FFFFFF');
      document.documentElement.style.setProperty('--active-color', '#FFCD00');
      document.documentElement.style.setProperty('--hover-color', '#b69917');
      document.documentElement.style.setProperty('--darken-effect', '#a8a8a8');
    }
  };

  useEffect(
    () => setFavouriteActions(userFavouriteActions),
    [userFavouriteActions]
  );

  useEffect(() => setBoughtActions(userBoughtActions), [userBoughtActions]);
  useEffect(() => {
    setTheme();
    setWallpaper();
    checkIfDataIsLoaded();
  }, [userSettings]);

  // useEffect(() => checkIfDataIsLoaded());
  return (
    <main id='home' className='home-page'>
      {restricted && <RestrictedInfo />}
      <HomePageFavourites actions={favouriteActions} />
      <HomePageDate />
      <HomePageBought actions={boughtActions} />
      {!isLoaded && (
        <LoadingBar
          announcement='Trwa ładowanie danych. Proszę czekać...'
          opacity={1}
        />
      )}
    </main>
  );
};

export default HomePage;
