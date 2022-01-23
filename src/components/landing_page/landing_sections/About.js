import React from 'react';
import Konrad from '../../../assets/img/team/Konrad.png';
import Kamil from '../../../assets/img/team/Kamil.png';
import Agnieszka from '../../../assets/img/team/Agnieszka.png';
import Krystian from '../../../assets/img/team/Krystian.png';

class About extends React.Component {
  state = {
    opinions: [
      {
        id: 0,
        name: 'Marek Owczarek ze Szczecina',
        text: 'Dzięki TradingTime zyskałem niezależność finansową. Zainwestowałem w akcje 30% moich oszczędności i już po roku mogłem cieszyć się nowym autem z salonu.',
        active: true,
      },
      {
        id: 1,
        name: 'Marta Trychowiec z Częstochowy',
        text: 'TradingTime to aplikacja, która pozwoliła mi osiągnąć spokojną starość. Zawsze chciałam mieć pewny fundusz emerytalny - od teraz nie muszę się już martwić przyszłością.',
        active: false,
      },
      {
        id: 2,
        name: 'Andrzej Lubiniec z Warszawy',
        text: 'Ta aplikacja pozwoliła powiększyć mój kapitał emerytalny - teraz mogę co tydzień mieszkać w innym mieście innego kraju. Pozdrowienia z Barcelony!',
        active: false,
      },
    ],
  };

  changeOpinion = () => {
    let currentActiveOpinion = 0;
    this.intervalId = setInterval(() => {
      let opinionsArr = [...this.state.opinions];

      opinionsArr.forEach((opinion) => {
        if (opinion.active) {
          currentActiveOpinion = opinion.id;
          opinion.active = false;
        }

        if (!opinion.active && opinion.id === currentActiveOpinion + 1)
          opinion.active = true;

        if (currentActiveOpinion === opinionsArr.length - 1)
          opinionsArr[0].active = true;
      });

      this.setState({ opinions: opinionsArr });
    }, 7000);
  };

  componentDidMount() {
    this.changeOpinion();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const opinionsArr = this.state.opinions.map((opinion) => {
      if (opinion.active)
        return (
          <div className='opinions'>
            <blockquote>{opinion.text}</blockquote>
            <p className='person'>{opinion.name}</p>
          </div>
        );
      else return null;
    });

    return (
      <>
        <section className='about'>
          <h2>Kim jesteśmy?</h2>
          <p>
            Trading Time to firma, która pozwoli Ci pomnożyć Twój kapitał nawet
            w kilka dni!
          </p>
          <p>
            Nasza spółka działa od 2005 roku. Możemy pochwalić się gronem
            klientów którzy nam zaufali. Dzięki naszym usługom pozwoliliśmy
            spełnić marzenia wialu osobom.
          </p>
          {opinionsArr}
        </section>
        <section className='team'>
          <h2>Nasz zespół</h2>
          <div className='team-gallery'>
            <div className='team-member'>
              <img
                src={Konrad}
                alt='Konrad Nowak - Frontend Developer, UI/UX designer'
              />
              <div className='member-description'>
                <h2>Konrad Nowak</h2>
                <span>
                  <p>Frontend Developer, UI/UX designer</p>
                </span>
              </div>
            </div>
            <div className='team-member'>
              <img
                src={Kamil}
                alt='Kamil Wypych - Frontend Developer, Analityk rynku'
              />
              <div className='member-description'>
                <h2>Kamil Wypych</h2>
                <span>
                  <p>Frontend Developer, Analityk rynku</p>
                </span>
              </div>
            </div>
            <div className='team-member'>
              <img
                src={Agnieszka}
                alt='Agnieszka Rabiej - Analityk rynku, Zarządca dokumentacji'
              />

              <div className='member-description'>
                <h2>Agnieszka Rabiej</h2>
                <span>
                  <p>Analityk rynku, Zarządca dokumentacji</p>
                </span>
              </div>
            </div>
            <div className='team-member'>
              <img
                src={Krystian}
                alt='Krystian Łabęcki - Backend Developer, Database Modeller'
              />
              <div className='member-description'>
                <h2>Krystian Łabęcki</h2>
                <span>
                  <p>Backend Developer, Database Modeller</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
