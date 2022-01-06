import React, { useState, useEffect, useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import SwitchButton from '../elements/SwitchButton';
import allegro from '../../../assets/img/testimages/allegro-favicon.png';
import ActionChart from '../ActionChart';
import QuestionModal from '../QuestionModal';
import InfoModal from '../../features/InfoModal';

import { AppContext } from '../../../AppContext';

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

  // week: [
  //   {
  //     day: '02.12.2021',
  //     value: '36.38',
  //   },
  //   {
  //     day: '03.12.2021',
  //     value: '36.54',
  //   },
  //   {
  //     day: '06.12.2021',
  //     value: '34.72',
  //   },
  //   {
  //     day: '07.12.2021',
  //     value: '37.26',
  //   },
  //   {
  //     day: '08.12.2021',
  //     value: '37.97',
  //   },
  //   {
  //     day: '09.12.2021',
  //     value: '39.16',
  //   },
  //   {
  //     day: '10.12.2021',
  //     value: '38.00',
  //   },
  //   {
  //     day: '11.12.2021',
  //     value: '38.20',
  //   },
  // ],

  pastValues: [
    { day: '15.10.2021', value: '50.69' },
    { day: '18.10.2021', value: '50.8' },
    { day: '19.10.2021', value: '49.295' },
    { day: '20.10.2021', value: '49.3' },
    { day: '21.10.2021', value: '49.48' },
    { day: '22.10.2021', value: '50.35' },
    { day: '25.10.2021', value: '48.67' },
    { day: '26.10.2021', value: '46.87' },
    { day: '27.10.2021', value: '47.36' },
    { day: '28.10.2021', value: '45.95' },
    { day: '29.10.2021', value: '45.12' },
    { day: '2.11.2021', value: '44.16' },
    { day: '3.11.2021', value: '43.5' },
    { day: '4.11.2021', value: '44.5' },
    { day: '5.11.2021', value: '49.25' },
    { day: '8.11.2021', value: '47.695' },
    { day: '9.11.2021', value: '42.34' },
    { day: '10.11.2021', value: '42.3' },
    { day: '12.11.2021', value: '40.8' },
    { day: '15.11.2021', value: '41.7' },
    { day: '16.11.2021', value: '44.03' },
    { day: '17.11.2021', value: '42.71' },
    { day: '18.11.2021', value: '44.965' },
    { day: '19.11.2021', value: '45.4' },
    { day: '22.11.2021', value: '43.085' },
    { day: '23.11.2021', value: '43.25' },
    { day: '24.11.2021', value: '40.37' },
    { day: '25.11.2021', value: '40.35' },
    { day: '26.11.2021', value: '42' },
    { day: '29.11.2021', value: '40.94' },
    { day: '30.11.2021', value: '39.995' },
    {
      day: '1.12.2021',
      value: '38.48',
    },
    {
      day: '2.12.2021',
      value: '36.38',
    },
    {
      day: '3.12.2021',
      value: '36.54',
    },
    {
      day: '6.12.2021',
      value: '34.72',
    },
    {
      day: '7.12.2021',
      value: '37.26',
    },
    {
      day: '8.12.2021',
      value: '37.97',
    },
    {
      day: '9.12.2021',
      value: '39.16',
    },
    {
      day: '10.12.2021',
      value: '38.00',
    },
    {
      day: '13.12.2021',
      value: '38.20',
    },
  ],
};

// const userData = {
//   accountBalance: 200,
//   smartAssistant: true,
// };

let interval = 0;

const MarketplacePage = () => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [inputActionsAmount, setInputActionsAmount] = useState(0);
  const [purchaseAction, setPurchaseAction] = useState(true);
  const [chartRange, setChartRange] = useState('today');
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);
  const [smartAssistant, setSmartAssistant] = useState(true);

  const { userAccountBalance } = useContext(AppContext);
  const { userSettings } = useContext(AppContext);

  const changeChartView = (range) => setChartRange(range);

  //wysłanie info do bazy o dokonanej transakcji
  const confirmTransaction = () => {
    if (purchaseAction) {
      let tempAccountBalance = accountBalance;
      tempAccountBalance -= actionDetails.price * inputActionsAmount;
      actionDetails.numberOfActions += inputActionsAmount;

      setAccountBalance(tempAccountBalance);
    } else {
      let tempAccountBalance = accountBalance;
      tempAccountBalance += actionDetails.price * inputActionsAmount;
      actionDetails.numberOfActions -= inputActionsAmount;
      setAccountBalance(tempAccountBalance);
    }
    setInputActionsAmount(0);
    setDisplayConfirmModal(!displayConfirmModal);
  };

  const handleChangePurchaseAction = () => setPurchaseAction(!purchaseAction);

  const handleConfirmTransaction = (e) => {
    e.preventDefault();
    if (inputActionsAmount <= 0) displayInfoModal('Określ liczbę akcji!');
    else if (
      inputActionsAmount * actionDetails.price > accountBalance &&
      purchaseAction &&
      purchaseAction
    )
      displayInfoModal('Nie masz wystarczających środków na koncie!');
    else if (
      inputActionsAmount > actionDetails.numberOfActions &&
      !purchaseAction
    )
      displayInfoModal('Nie posiadasz tylu akcji na sprzedaż!');
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

  const displayInfoModal = (message) => {
    setInfoMessage(message);
    setInfoVisible(true);
    setTimeout(() => {
      setInfoVisible(false);
    }, 3000);
  };

  useEffect(() => {
    setAccountBalance(Number(userAccountBalance));
    setSmartAssistant(userSettings.smartAssistant);
  }, []);

  return (
    <main className='marketplace-page'>
      {/* {getBollingerBands()} */}
      {/* {fillDataArrays()} */}
      {console.log(infoMessage)}
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
            Stan konta: {accountBalance ? accountBalance.toFixed(2) : null} zł
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
      <InfoModal message={infoMessage} visible={infoVisible} position='right' />
      {console.log(infoMessage)}
    </main>
  );
};

export default MarketplacePage;
