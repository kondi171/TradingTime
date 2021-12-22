import React from 'react';
import allegro from '../../../assets/img/testimages/allegro-favicon.png';
import cdpsa from '../../../assets/img/testimages/cdpsa-favicon.png';
import HomePageFavourites from '../HomePageFavourites';
import HomePageBought from '../HomePageBought';
import HomePageDate from '../HomePageDate';
class HomePage extends React.Component {
  state = {
    time: 0,
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

  render() {
    return (
      <main className='home-page'>
        <HomePageFavourites actions={this.state.actions} />
        <HomePageDate />
        <HomePageBought actions={this.state.actions} />
      </main>
    );
  }
}

export default HomePage;
