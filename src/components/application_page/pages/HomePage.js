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

  setTime = () => {
    const time = document.querySelector('.home-page__clock--time');
    const date = document.querySelector('.home-page__clock--date');
    let dateObject = new Date();

    let hour = dateObject.getHours();
    if (hour < 10) hour = '0' + hour;

    let minute = dateObject.getMinutes();
    if (minute < 10) minute = '0' + minute;

    time.textContent = hour + ':' + minute;

    let day = dateObject.getUTCDate();

    if (day < 10) day = '0' + day;
    let month = dateObject.getUTCMonth();

    if (month === 0) month = 'Styczeń';
    else if (month === 1) month = 'Luty';
    else if (month === 2) month = 'Marzec';
    else if (month === 3) month = 'Kwiecień';
    else if (month === 4) month = 'Maj';
    else if (month === 5) month = 'Czerwiec';
    else if (month === 6) month = 'Lipiec';
    else if (month === 7) month = 'Sierpień';
    else if (month === 8) month = 'Wrzesień';
    else if (month === 9) month = 'Pażdziernik';
    else if (month === 10) month = 'Listopad';
    else if (month === 11) month = 'Grudzień';
    let year = dateObject.getUTCFullYear();
    date.textContent = day + ' ' + month + ' ' + year;
  };

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
    this.setTime();
  }

  componentDidUpdate() {
    this.setTime();
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return (
      <>
        <main className='home-page'>
          <HomePageFavourites actions={this.state.actions} />
          <HomePageDate />
          <HomePageBought actions={this.state.actions} />
        </main>
      </>
    );
  }
}

export default HomePage;
