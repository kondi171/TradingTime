import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SwitchButton from '../elements/SwitchButton';
import allegro from '../../../assets/img/testimages/allegro-favicon.png';
const actionDetails = {
  id: 0,
  actionName: 'Allegro',
  price: 4.2,
  image: '',
  isFavourite: true,
  isBought: true,
  lastUpdate: '22.11.2021',
  numberOfActions: 20,
};

const userData = {
  accountBalance: 200,
};

let interval = 0;

const MarketplacePage = () => {
  const [inputActionsAmount, setInputActionsAmount] = useState(0);
  const [purchaseAction, setPurchaseAction] = useState(true);

  const URLParams = () => {
    let params = useParams();
    console.log(params.actionId);
    return null;
  };

  const handleChangePurchaseAction = () => {
    setPurchaseAction(!purchaseAction);
  };

  const handleInputActionsValueChange = (e, type, mouseEvent = 'click') => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars

    if (mouseEvent === 'click') {
      if (type === 'add') setInputActionsAmount(inputActionsAmount + 1);
      if (type === 'subtract' && inputActionsAmount > 0)
        setInputActionsAmount(inputActionsAmount - 1);
    }

    if (mouseEvent === 'hold') {
      if (type === 'add')
        interval = setInterval(
          () => setInputActionsAmount((prevAmount) => prevAmount + 1),
          100
        );

      if (type === 'subtract') {
        let actualNumber = inputActionsAmount;

        interval = setInterval(() => {
          if (actualNumber > 0) {
            setInputActionsAmount((prevAmount) => prevAmount - 1);
            actualNumber--;
          }
        }, 100);
      }
    }

    if (mouseEvent === 'release') {
      clearInterval(interval);
    }
  };

  const handleFinalizeTransaction = (e) => {
    e.preventDefault();
  };

  const {
    id,
    actionNAme,
    price,
    image,
    isFavourite,
    isBought,
    lastUpdate,
    numberOfActions,
  } = actionDetails;

  return (
    <main className='marketplace-page'>
      {URLParams()}
      <section className='marketplace-page__details'>
        <div className='marketplace-page__choosen-action'>
          <img src={allegro} alt='' />
          <h1>{actionDetails.actionName}</h1>
          <i className='fa fa-search' aria-hidden='true'></i>
        </div>
        <section className='marketplace-page__info'>
          <p className='marketplace-page__account-balance'>
            Stan konta: {userData.accountBalance.toFixed(2)} zł
          </p>
          <p className='marketplace-page__action-price'>
            Aktualna cena akcji: {price.toFixed(2)} zł
          </p>
          <p className='marketplace-page__number-of-actions'>
            Ilość posiadanych akcji: {numberOfActions} szt.
          </p>
          <p className='marketplace-page__total-actions-amount'>
            Wartość posiadanych akcji: {(numberOfActions * price).toFixed(2)} zł
          </p>
        </section>

        <section className='marketplace-page__trade'>
          <form onSubmit={handleFinalizeTransaction}>
            <input
              className='marketplace-page__input input'
              type='text'
              readOnly
              value={inputActionsAmount}
            />
            <button
              className='button button--math'
              onMouseDown={(e) =>
                handleInputActionsValueChange(e, 'subtract', 'hold')
              }
              onMouseUp={(e) =>
                handleInputActionsValueChange(e, 'subtract', 'release')
              }
              onClick={(e) => handleInputActionsValueChange(e, 'subtract')}
            >
              <i className='fa fa-minus' aria-hidden='true'></i>
            </button>

            <button
              className='button button--math'
              onMouseDown={(e) =>
                handleInputActionsValueChange(e, 'add', 'hold')
              }
              onMouseUp={(e) =>
                handleInputActionsValueChange(e, 'add', 'release')
              }
              onClick={(e) => handleInputActionsValueChange(e, 'add')}
            >
              <i className='fa fa-plus' aria-hidden='true'></i>
            </button>

            <p>
              Wartość wybranych akcji: {(inputActionsAmount * price).toFixed(2)}{' '}
              zł
            </p>

            <div className='marketplace-page__transaction-type'>
              <p>Typ transakcji: </p>

              <SwitchButton
                firstOption='Kup'
                secondOption='Sprzedaj'
                checkedState={purchaseAction}
                toggleOptionHandler={handleChangePurchaseAction}
              />
            </div>

            <button className='button'>Finalizuj</button>
          </form>
        </section>
      </section>
      <section className='marketplace-page__action'></section>
    </main>
  );
};

export default MarketplacePage;
