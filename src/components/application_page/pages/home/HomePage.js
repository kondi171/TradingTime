import React from 'react';
import allegro from '../../../../assets/img/testimages/allegro-favicon.png';
import cdpsa from '../../../../assets/img/testimages/cdpsa-favicon.png';
import HomePageFavourites from './HomePageFavourites';
import HomePageBought from './HomePageBought';
import HomePageDate from './HomePageDate';
import RestrictedInfo from '../../../features/RestrictedInfo';
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
    const home = document.getElementById('home');
    if (this.state.wallpaper === 1) {
      home.classList.add('wallpaper1');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper3');
    }
    else if (this.state.wallpaper === 2) {
      home.classList.add('wallpaper2');
      home.classList.remove('wallpaper1');
      home.classList.remove('wallpaper3');
    }
    else {
      home.classList.add('wallpaper3');
      home.classList.remove('wallpaper2');
      home.classList.remove('wallpaper1');
    }
  }

  componentDidMount() {
    this.handleChangeWallpaper();
  }
  componentDidUpdate() {
    this.handleChangeWallpaper();
  }

  render() {
    return (
      <main id='home' className='home-page'>
        {this.state.restricted && <RestrictedInfo />}
        <HomePageFavourites actions={this.state.actions} />
        <HomePageDate />
        <HomePageBought actions={this.state.actions} />
      </main>
    );
  }
}

export default HomePage;
