import React, { useState, useContext, useEffect } from 'react';
// import allegro from '../../../assets/img/testimages/allegro-favicon.png';
// import cdpsa from '../../../assets/img/testimages/cdpsa-favicon.png';
import { AppContext } from '../../../../AppContext';
import WalletAction from './WalletAction';
import matchFavouriteActions from '../../../helpers/MatchFavBoughtActions';
import { NavLink } from 'react-router-dom';

const WalletPage = () => {
  const [accountBalance, setAccountBalance] = useState(0);
  const [userActions, setUserActions] = useState('');
  const [showLoadingBar, setShowLoadingBar] = useState(false);

  const { userAccountBalance } = useContext(AppContext);
  const { userFavouriteActions } = useContext(AppContext);
  const { userBoughtActions } = useContext(AppContext);
  const { userId } = useContext(AppContext);
  const { addActionToFavourite } = useContext(AppContext);
  const { deleteActionFromFavourite } = useContext(AppContext);

  const loadData = () => {
    setUserActions(
      matchFavouriteActions(userBoughtActions, userFavouriteActions)
    );
  };

  const displayUserActions = () => {
    if (userActions.length > 0) {
      return [...userActions].map((userAction) => (
        <WalletAction
          key={userAction.id_action}
          actionId={userAction.id_action}
          actionName={userAction.actionName}
          price={userAction.price}
          image={userAction.image}
          isFavourite={userAction.isFavourite}
          lastUpdate={userAction.lastUpdate}
          numberOfActions={userAction.amount}
          toggleFavourite={() =>
            toggleFavourite(userAction.id_action, userAction.isFavourite)
          }
        />
      ));
    } else {
      return (
        <NavLink to={`/app/search`} className='navlink--casual'>
          <p className='wallet-page__no-actions-info'>
            Nie posiadasz żadnych akcji. Wyszukaj interesujące Cię akcje w
            naszej wyszukiwarce!
          </p>
        </NavLink>
      );
    }
  };

  const toggleFavourite = async (id, isFavourite) => {
    setShowLoadingBar(true);
    if (isFavourite) {
      const status = await deleteActionFromFavourite(userId, id);
      if (status.success) setShowLoadingBar(false);
    } else {
      const status = await addActionToFavourite(userId, id);
      if (status.success) setShowLoadingBar(false);
    }
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

  useEffect(() => {
    setAccountBalance(userAccountBalance);
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadData(), [userFavouriteActions]);

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
              {accountBalance
                ? `${(
                    countBilanceFromActions() + parseFloat(accountBalance)
                  ).toFixed(2)} zł`
                : null}
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
        <div className='wallet-page__actions'>{displayUserActions()}</div>
        {/* <div className='wallet-page__actions'>{test()}</div> */}
      </main>
    </>
  );
};

export default WalletPage;
