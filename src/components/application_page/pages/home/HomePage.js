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

  const [wallpaper, setWallpaper] = useState(0);
  const [restricted, setRestricted] = useState(false);
  const [favouriteActions, setFavouriteActions] = useState('');
  const [boughtActions, setBoughtActions] = useState('');

  const { userFavouriteActions } = useContext(AppContext);
  const { userBoughtActions } = useContext(AppContext);

  const handleChangeWallpaper = () => {
    const home = document.getElementById('home');
    if (wallpaper === 1) {
      home.classList.add('wallpaper1');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper3');
    } else if (wallpaper === 2) {
      home.classList.add('wallpaper2');
      home.classList.remove('wallpaper1');
      home.classList.remove('wallpaper3');
    } else if (wallpaper === 3) {
      home.classList.add('wallpaper3');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper1');
    }
  };

  useEffect(() => handleChangeWallpaper(), []);

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
