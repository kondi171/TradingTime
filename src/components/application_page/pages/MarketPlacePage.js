import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import SwitchButton from '../elements/SwitchButton';
import allegro from '../../../assets/img/testimages/allegro-favicon.png';
import ActionChart from '../ActionChart';
import QuestionModal from '../QuestionModal';
const actionDetails = {
  id: 0,
  actionName: 'Allegro',
  price: 39.16,
  image: '',
  isFavourite: true,
  isBought: true,
  lastUpdate: '09.12.2021 17:00',
  numberOfActions: 20,
};

const actionValues = {
  today: [
    {
      day: '09.12.2021',
      hour: 9,
      value: '37.94',
    },
    {
      day: '09.12.2021',
      hour: 10,
      value: '38.96',
    },
    {
      day: '09.12.2021',
      hour: 11,
      value: '39.16',
    },
    {
      day: '09.12.2021',
      hour: 12,
      value: '39.15',
    },
    {
      day: '09.12.2021',
      hour: 13,
      value: '39.08',
    },
    {
      day: '09.12.2021',
      hour: 14,
      value: '38.83',
    },
    {
      day: '09.12.2021',
      hour: 15,
      value: '38.90',
    },
    {
      day: '09.12.2021',
      hour: 16,
      value: '39.12',
    },
    {
      day: '09.12.2021',
      hour: 17,
      value: '39.16',
    },
  ],

  week: [
    {
      day: '02.12.2021',
      value: '36.38',
    },
    {
      day: '03.12.2021',
      value: '36.54',
    },
    {
      day: '06.12.2021',
      value: '34.72',
    },
    {
      day: '07.12.2021',
      value: '37.26',
    },
    {
      day: '08.12.2021',
      value: '37.97',
    },
    {
      day: '09.12.2021',
      value: '39.16',
    },
    {
      day: '10.12.2021',
      value: '38.00',
    },
    {
      day: '11.12.2021',
      value: '38.20',
    },
  ],

  month: [],

  quarter: [],
};

const userData = {
  accountBalance: 200,
};

let interval = 0;

const MarketplacePage = () => {
  const [inputActionsAmount, setInputActionsAmount] = useState(0);
  const [purchaseAction, setPurchaseAction] = useState(true);
  const [chartRange, setChartRange] = useState('today');
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false);

  const changeChartView = (range) => setChartRange(range);

  //wysłanie info do bazy o dokonanej transakcji
  const confirmTransaction = () => {
    if (purchaseAction) {
      userData.accountBalance -= actionDetails.price * inputActionsAmount;
      actionDetails.numberOfActions += inputActionsAmount;
    } else {
      userData.accountBalance += actionDetails.price * inputActionsAmount;
      actionDetails.numberOfActions -= inputActionsAmount;
    }
    setInputActionsAmount(0);
    setDisplayConfirmModal(!displayConfirmModal);
  };

  const handleChangePurchaseAction = () => setPurchaseAction(!purchaseAction);

  const handleConfirmTransaction = (e) => {
    e.preventDefault();
    if (inputActionsAmount <= 0) alert('Określ liczbę akcji.');
    else if (
      inputActionsAmount * actionDetails.price > userData.accountBalance &&
      purchaseAction &&
      purchaseAction
    )
      alert('Nie masz wystarczających środków na koncie!');
    else if (
      inputActionsAmount > actionDetails.numberOfActions &&
      !purchaseAction
    )
      alert('Nie posiadasz tylu akcji na sprzedaż!');
    else setDisplayConfirmModal(!displayConfirmModal);
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

  const URLParams = () => {
    let params = useParams();
    console.log(params.actionId);
    return null;
  };

  const modalTextSetter = () => {
    let inflection = 'akcji';
    let transactionType = 'kupić';
    let text = '';
    if (inputActionsAmount > 1 && inputActionsAmount < 5) inflection = 'akcje';
    else if (inputActionsAmount === 1) inflection = 'akcję';

    if (!purchaseAction) transactionType = 'sprzedać';

    text = `Czy na pewno chcesz ${transactionType} ${inputActionsAmount} ${inflection} ${actionDetails.actionName}?`;
    return text;
  };

  const { price, numberOfActions } = actionDetails;

  return (
    <main className='marketplace-page'>
      {displayConfirmModal ? (
        <QuestionModal
          acceptAction={confirmTransaction}
          denyAction={() => setDisplayConfirmModal(!displayConfirmModal)}
          info={modalTextSetter()}
        />
      ) : null}

      <section className='marketplace-page__details'>
        <div className='marketplace-page__choosen-action'>
          <img src={allegro} alt='' />
          <h1>{actionDetails.actionName}</h1>
          <NavLink to={`/app/search`} className='navlink--casual'>
            <i className='fa fa-search' aria-hidden='true'></i>
          </NavLink>
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
          <form onSubmit={handleConfirmTransaction}>
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

            <button className='button' type='submit'>
              Finalizuj
            </button>
          </form>
        </section>
      </section>

      <section className='marketplace-page__action-chart'>
        <ActionChart
          actionName={actionDetails.actionName}
          actionValues={actionValues}
          chartRange={chartRange}
        />

        <div className='marketplace-page__chart-buttons'>
          <button
            className='button marketplace-page__chart-button'
            onClick={() => changeChartView('today')}
          >
            Dzisiaj
          </button>
          <button
            className='button marketplace-page__chart-button'
            onClick={() => changeChartView('week')}
          >
            Ostatnie 7 dni
          </button>
          <button
            className='button marketplace-page__chart-button'
            onClick={() => changeChartView('month')}
          >
            Ostatni miesiąc
          </button>
          <button
            className='button marketplace-page__chart-button'
            onClick={() => changeChartView('quarter')}
          >
            Ostatnie 3 miesiące
          </button>
        </div>
      </section>
    </main>
  );
};

export default MarketplacePage;
