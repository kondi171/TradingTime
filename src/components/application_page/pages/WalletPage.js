import React from 'react';
import allegro from '../../../assets/img/testimages/allegro-favicon.png';
import cdpsa from '../../../assets/img/testimages/cdpsa-favicon.png';

import WalletAction from '../WalletAction';
class WalletPage extends React.Component {
  // State zawiera elementy wyciągniete z tabeli o akcjach posiadanych przez uzytkownika oraz stanie konta

  state = {
    userActions: [
      {
        id: 0,
        actionName: 'Allegro',
        price: 4.2,
        image: allegro,
        isFavourite: true,
        lastUpdate: '22.11.2021',
        numberOfActions: 20,
      },
      {
        id: 1,
        actionName: 'CD Project Red',
        price: 1.1,
        image: cdpsa,
        isFavourite: false,
        lastUpdate: '18.11.2021',
        numberOfActions: 50,
      },
    ],

    wallet: {
      accountBalance: 200,
    },
  };

  WalletActionArray = null;

  displayUserActions = () =>
    (this.WalletActionArray = [...this.state.userActions].map((userAction) => (
      <WalletAction
        key={userAction.id}
        name={userAction.actionName}
        price={userAction.price}
        image={userAction.image}
        isFavourite={userAction.isFavourite}
        lastUpdate={userAction.lastUpdate}
        numberOfActions={userAction.numberOfActions}
        toggleFavourite={() => this.toggleFavourite(userAction.id)}
      />
    )));

  toggleFavourite = (id) => {
    let userActions = [...this.state.userActions].map((action) => {
      if (action.id === id) action.isFavourite = !action.isFavourite;
      return action;
    });

    this.setState({
      userActions,
    });
  };

  countBilanceFromActions = () => {
    let value = 0;
    [...this.state.userActions].map(
      (action) => (value += action.price * action.numberOfActions)
    );

    return value;
  };

  showWalletDetails = () => {
    document.querySelector('.wallet-page__money').classList.toggle('show');
    document
      .querySelectorAll('.wallet-page__money--details')
      .forEach((element) => element.classList.toggle('hidden'));
    if (
      document
        .querySelector('.wallet-page__money')
        .classList.value.includes('show')
    ) {
      document
        .querySelector('.wallet-page__money--show-button')
        .classList.add('fa-minus-circle');
      document
        .querySelector('.wallet-page__money--show-button')
        .classList.remove('fa-plus-circle');
    } else {
      document
        .querySelector('.wallet-page__money--show-button')
        .classList.add('fa-plus-circle');
      document
        .querySelector('.wallet-page__money--show-button')
        .classList.remove('fa-minus-circle');
    }
  };

  render() {
    return (
      <>
        <main className='wallet-page'>
          <div className='wallet-page__money'>
            <i
              className='wallet-page__money--show-button fa fa-plus-circle'
              onClick={this.showWalletDetails}
            ></i>
            <p>
              Środki na koncie:{' '}
              <span> {this.state.wallet.accountBalance} zł </span>
            </p>
            <p className='wallet-page__money--details hidden'>
              Wartość wszystkich akcji:
              <span> {this.countBilanceFromActions().toFixed(2)} zł </span>
            </p>
            <p className='wallet-page__money--details hidden'>
              Całkowita wartość portfela:
              <span>
                {' '}
                {(
                  this.countBilanceFromActions() +
                  this.state.wallet.accountBalance
                ).toFixed(2)}{' '}
                zł
              </span>
            </p>
          </div>
          <div className='wallet-page__actions__label'>
            <p className='wallet-page__actions__label--action-image'></p>
            <p className='wallet-page__actions__label--action-name'>
              Nazwa akcji
            </p>
            <p className='wallet-page__actions__action--number'>
              Ilość posiadanych akcji
            </p>
            <p className='wallet-page__actions__action--price'>
              Aktualna cena akcji
            </p>
            <p className='wallet-page__actions__action--total-price'>
              Całkowita wartość posiadanych akcji
            </p>
          </div>
          <div className='wallet-page__actions'>
            {this.displayUserActions()}
          </div>
        </main>
      </>
    );
  }
}
export default WalletPage;
