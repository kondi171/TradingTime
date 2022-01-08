import React, { useState, useEffect, useContext } from 'react';

import HomePageFavourites from './HomePageFavourites';
import HomePageBought from './HomePageBought';
import HomePageDate from './HomePageDate';
import RestrictedInfo from '../../../features/RestrictedInfo';
<<<<<<< HEAD

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
=======
class HomePage extends React.PureComponent {
  state = {
    time: 0,
    wallpaper: 3,
    restricted: false,
    actions: [
      {
        actionId: 0,
        isFavourite: true,
        isBought: true,
        image: allegro,
      },
      {
        actionId: 1,
        isFavourite: true,
        isBought: false,
        image: cdpsa,
      },
      {
        actionId: 2,
        isFavourite: false,
        isBought: false,
        image: '',
      },
      {
        actionId: 3,
        isFavourite: false,
        isBought: false,
        image: '',
      },
      {
        actionId: 4,
        isFavourite: false,
        isBought: false,
        image: '',
      },
      {
        actionId: 5,
        isFavourite: false,
        isBought: false,
        image: '',
      },
    ],
  };
  handleChangeWallpaper = () => {
>>>>>>> 3ec0f589617e21503493814fa8034e0639f34e8b
    const home = document.getElementById('home');
    if (wallpaper === 1) {
      home.classList.add('wallpaper1');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper3');
    } else if (wallpaper === 2) {
      home.classList.add('wallpaper2');
      home.classList.remove('wallpaper1');
      home.classList.remove('wallpaper3');
<<<<<<< HEAD
    } else if (wallpaper === 3) {
=======
    }
    else {
>>>>>>> 3ec0f589617e21503493814fa8034e0639f34e8b
      home.classList.add('wallpaper3');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper1');
    }
  };

  useEffect(() => handleChangeWallpaper(), []);

<<<<<<< HEAD
  useEffect(
    () => setFavouriteActions(userFavouriteActions),
    [userFavouriteActions]
  );
  useEffect(() => setBoughtActions(userBoughtActions), [userBoughtActions]);
=======
  componentDidMount() {
    this.handleChangeWallpaper();
  }
  componentDidUpdate() {
    this.handleChangeWallpaper();
  }
>>>>>>> 3ec0f589617e21503493814fa8034e0639f34e8b

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
