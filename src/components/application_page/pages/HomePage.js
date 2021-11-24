import React from 'react';
import NavBar from '../NavBar';

class HomePage extends React.Component {
    state = {
        time: 0,
    }
    componentDidMount() {  
        this.clockInterval = setInterval(()=>{
            this.setState({
                time: this.state.time + 1,
            });
        },1000);
    }
    componentDidUpdate() {
        const time = document.querySelector('.home-page__clock--time');
        const date = document.querySelector('.home-page__clock--date');
        let dateObject = new Date();

        let hour = dateObject.getHours();
        if(hour < 10) hour = "0" + hour;
        let minute = dateObject.getMinutes();
        if(minute < 10) minute = "0" + minute;
        let second = dateObject.getSeconds();
        if(second < 10) second = "0" + second;
        time.textContent = hour + ":" + minute + ":" + second;

        let day = dateObject.getUTCDay();
        day += 21;
        if(day < 10) day = "0" + day;
        let month = dateObject.getUTCMonth();
        month += 1;
        if(month == 1) month = "Styczeń";
        else if(month == 2) month ="Luty";
        else if(month == 3) month ="Marzec";
        else if(month == 4) month ="Kwiecień";
        else if(month == 5) month ="Maj";
        else if(month == 6) month ="Czerwiec";
        else if(month == 7) month ="Lipiec";
        else if(month == 8) month ="Sierpień";
        else if(month == 9) month ="Wrzesień";
        else if(month == 10) month ="Pażdziernik";
        else if(month == 11) month ="Listopad";
        else if(month == 12) month ="Grudzień";
        let year = dateObject.getUTCFullYear();
        date.textContent = day + " " + month + " " + year;
    }
    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }

    render() {
      return (
        <>
        <NavBar />
        <main className="home-page">
          <div className="home-page__favourites">
            <h2><i class="fa fa-heart"></i> Ulubione:</h2>
            <div className="home-page__favourites--icons">
                <a href="#">+</a>
                <a href="#">+</a>
                <a href="#">+</a>
                <a href="#">+</a>
                <a href="#">+</a>
                <a href="#">+</a>
            </div>
          </div>
          
          <div onClick={this.handleClock} className="home-page__clock">
              <div className="home-page__clock--time">00:00:00</div>
              <div className="home-page__clock--date">1 Styczeń 1970</div>
          </div>
          <div className="home-page__actions">
            <h2><i class="fa fa-line-chart"></i> Twoje Akcje:</h2>
            <div className="home-page__actions--action-content">Brak Kupionych akcji!</div>
          </div>
        </main>
        </>
      );
    }
}

export default HomePage;
