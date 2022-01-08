import React, { useState, useContext, useEffect } from 'react';
<<<<<<< HEAD:src/components/application_page/pages/WalletPage.js
import allegro from '../../../assets/img/testimages/allegro-favicon.png';
import cdpsa from '../../../assets/img/testimages/cdpsa-favicon.png';
import { AppContext } from '../../../AppContext';
import WalletAction from '../WalletAction';
import matchFavouriteActions from '../../helpers/MatchFavBoughtActions';
=======
import allegro from '../../../../assets/img/testimages/allegro-favicon.png';
import cdpsa from '../../../../assets/img/testimages/cdpsa-favicon.png';
import { AppContext } from '../../../../AppContext';
import WalletAction from './WalletAction';
>>>>>>> 9a9b96feae3f7295911fdf5bc2be9226356db33a:src/components/application_page/pages/wallet/WalletPage.js

const WalletPage = () => {
  // State zawiera elementy wyciągniete z tabeli o akcjach posiadanych przez uzytkownika oraz stanie konta

  // state = {
  //   userActions: [
  // {
  //   id: 0,
  //   actionName: 'Allegro',
  //   price: 4.2,
  //   image: allegro,
  //   isFavourite: true,
  //   lastUpdate: '22.11.2021',
  //   numberOfActions: 20,
  // },
  // {
  //   id: 1,
  //   actionName: 'CD Project Red',
  //   price: 1.1,
  //   image: cdpsa,
  //   isFavourite: false,
  //   lastUpdate: '18.11.2021',
  //   numberOfActions: 50,
  // },
  //   ],

  //   wallet: {
  //     accountBalance: 200,
  //   },
  // };

  const [accountBalance, setAccountBalance] = useState(0);
  const [userActions, setUserActions] = useState([
    // {
    //   id: 1,
    //   actionName: 'Allegro',
    //   price: 4.2,
    //   image: allegro,
    //   isFavourite: true,
    //   lastUpdate: '22.11.2021',
    //   numberOfActions: 20,
    // },
    // {
    //   id: 9,
    //   actionName: 'CD Project Red',
    //   price: 1.1,
    //   image: cdpsa,
    //   isFavourite: false,
    //   lastUpdate: '18.11.2021',
    //   numberOfActions: 50,
    // },
  ]);

  const { userAccountBalance } = useContext(AppContext);
  const { userFavouriteActions } = useContext(AppContext);
  const { userBoughtActions } = useContext(AppContext);
  const { userId } = useContext(AppContext);
  const { fetchUserBoughtActions } = useContext(AppContext);

  const loadData = () => {
    setUserActions(
      matchFavouriteActions(userBoughtActions, userFavouriteActions)
    );
  };

  // eslint-disable-next-line no-unused-vars
  let walletActionArray = null;

  const displayUserActions = () =>
  (walletActionArray = [...userActions].map((userAction) => (
    <WalletAction
      key={userAction.id}
      actionId={userAction.id}
      name={userAction.actionName}
      price={userAction.price}
      image={userAction.image}
      isFavourite={userAction.isFavourite}
      lastUpdate={userAction.lastUpdate}
      numberOfActions={userAction.numberOfActions}
      toggleFavourite={() => toggleFavourite(userAction.id)}
    />
  )));

  const toggleFavourite = (id) => {
    let userActions = [...this.state.userActions].map((action) => {
      if (action.id === id) action.isFavourite = !action.isFavourite;
      return action;
    });

    setUserActions([...userActions]);
  };

  const countBilanceFromActions = () => {
    let value = 0;
    [...userActions].map(
      (action) => (value += action.price * action.numberOfActions)
    );

    return value;
  };

  const showWalletDetails = () => {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setAccountBalance(userAccountBalance);
    loadData();
  }, []);

  return (
    <>
      <main className='wallet-page'>
        <div className='wallet-page__money'>
          <i
            className='wallet-page__money--show-button fa fa-plus-circle'
            onClick={showWalletDetails}
          ></i>
          <p>
            Środki na koncie: <span> {accountBalance} zł </span>
          </p>
          <p className='wallet-page__money--details hidden'>
            Wartość wszystkich akcji:
            <span> {countBilanceFromActions().toFixed(2)} zł </span>
          </p>
          <p className='wallet-page__money--details hidden'>
            Całkowita wartość portfela:
            <span>
              {/* {accountBalance
                ? `${(
<<<<<<< HEAD:src/components/application_page/pages/WalletPage.js
                    countBilanceFromActions() + parseFloat(accountBalance)
                  ).toFixed(2)} zł`
                : null} */}
=======
                  countBilanceFromActions() + parseFloat(accountBalance)
                ).toFixed(2)} zł`
                : null}
>>>>>>> 9a9b96feae3f7295911fdf5bc2be9226356db33a:src/components/application_page/pages/wallet/WalletPage.js
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
        {/* <div className='wallet-page__actions'>{displayUserActions()}</div> */}
      </main>
    </>
  );
};

export default WalletPage;
