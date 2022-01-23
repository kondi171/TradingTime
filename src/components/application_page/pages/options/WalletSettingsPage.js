import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../../../AppContext';
import OperateMoneyModal from '../../../features/modals/OperateMoneyModal';
import ModifyAccountNumber from '../../../helpers/ModifyAccountNumber';
import InfoModal from '../../../features/modals/InfoModal';

const WalletSettingsPage = () => {
  const [accountNr, setAccountNr] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const [amountToWithdraw, setAmountToWithdraw] = useState(1);
  const [amountToDeposit, setAmountToDeposit] = useState(1);
  const [withdrawMoneyModal, setWithdrawMoneyModal] = useState(false);
  const [depositMoneyModal, setDepositMoneyModal] = useState(false);
  const [infoVisble, setInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const { userAccountBalance } = useContext(AppContext);
  const { userPersonalData } = useContext(AppContext);
  const { fetchAccountBalance } = useContext(AppContext);
  const { userId } = useContext(AppContext);
  const { userSettings } = useContext(AppContext);
  const { isAllInfoProvided } = useContext(AppContext);

  const handleDepositMoney = async (amountToDeposit) => {
    let value = amountToDeposit.toString();

    if (value.includes('.')) value = value.replace(/[.]/g, ',');

    const API = `http://localhost/api/v1/pay/${userId}&${value}`;

    const operation = await fetch(API)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    if (operation.success) {
      const refreshWallet = await fetchAccountBalance(userId);

      if (refreshWallet.success) {
        setAmountToDeposit(1);
        setDepositMoneyModal(false);
        displayInfoModal(
          'Transakcja przebiegła pomyślnie! Oczekuj pieniędzy na swoim koncie.'
        );
      }
    } else displayInfoModal('Coś poszło nie tak... Spróbuj ponownie');

    return operation;
  };

  const handleWithdrawMoney = async (e, amountToWithdraw) => {
    e.preventDefault();

    let value = (amountToWithdraw * -1).toString();

    if (value.includes('.')) value = value.replace(/[.]/g, ',');

    const API = `http://localhost/api/v1/pay/${userId}&${value}`;

    if (amountToWithdraw > accountBalance)
      displayInfoModal('Nie posiadasz tyle pieniędzy na koncie!');
    else {
      const operation = await fetch(API)
        .then((response) => response.json())
        .catch((err) => console.log(err));

      if (operation.success) {
        const refreshWallet = await fetchAccountBalance(userId);
        if (refreshWallet.success) {
          setAmountToWithdraw(1);
          setWithdrawMoneyModal(false);
          displayInfoModal(
            'Transakcja przebiegła pomyślnie! Oczekuj pieniędzy na swoim koncie.'
          );
        }
      } else displayInfoModal('Coś poszło nie tak... Spróbuj ponownie');
      return operation;
    }
  };

  const handleWithdrawInputChange = (e) => {
    const amountToWithdraw = e.target.value;
    setAmountToWithdraw(amountToWithdraw);
  };

  const handleDepositInputChange = (e) => {
    const amountToDeposit = e.target.value;
    setAmountToDeposit(amountToDeposit);
  };

  const displayInfoModal = (message) => {
    setInfoVisible(true);
    setInfoMessage(message);
    setTimeout(() => {
      setInfoVisible(false);
      setInfoMessage('');
    }, 3000);
  };

  useEffect(() => {
    setAccountBalance(Number(userAccountBalance));
  }, [withdrawMoneyModal, depositMoneyModal]);

  useEffect(() => {
    setAccountBalance(Number(userAccountBalance));
    setAccountNr(userPersonalData.bankAccount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='settings-page__preferences'>
      <h1>Ustawienia portfela</h1>
      <div className='settings-page__preferences__list'>
        <h2>Ogólne</h2>
        <div className='settings-page__preferences__list__resources'>
          <p>Dostępne środki na koncie: </p>
          <span>{accountBalance.toFixed(2)} zł</span>
        </div>

        <div className='settings-page__preferences__list__account-number'>
          <p>Numer konta do wpłat: </p>
          <span>
            {accountNr === '' || accountNr === null || accountNr === 'null'
              ? 'Numer konta nie został podany!'
              : ModifyAccountNumber(accountNr)}
          </span>
          <i className='fa fa-question-circle-o' aria-hidden='true'>
            <span></span>
          </i>
        </div>

        <div className='settings-page__preferences__list__account-buttons'>
          <button
            className='button button--large'
            onClick={() => {
              if (Number(userSettings.simulationMode)) {
                displayInfoModal(
                  'Nie można wpłacić pieniędzy gdy ustawiony jest tryb symulacji!'
                );
              } else if (!isAllInfoProvided)
                displayInfoModal(
                  'Nie można wpłacić pieniędzy gdy nie podano wszystkich informacji osobowych!'
                );
              else setWithdrawMoneyModal(!withdrawMoneyModal);
            }}
          >
            Wypłać pieniądze na konto
          </button>
          <button
            className='button button--large'
            onClick={() => {
              if (Number(userSettings.simulationMode))
                displayInfoModal(
                  'Nie można wypłacić pieniędzy gdy ustawiony jest tryb symulacji!'
                );else if (!isAllInfoProvided)
                displayInfoModal(
                  'Nie można wypłacić pieniędzy gdy nie podano wszystkich informacji osobowych!'
                );
              else setDepositMoneyModal(!depositMoneyModal);
            }}
          >
            Wpłać pieniądze do aplikacji
          </button>
        </div>
      </div>

      {withdrawMoneyModal ? (
        <OperateMoneyModal
          handleModal={() => setWithdrawMoneyModal(!withdrawMoneyModal)}
          handleMoney={(e) => handleWithdrawMoney(e, amountToWithdraw)}
          amount={amountToWithdraw}
          handleInputChange={handleWithdrawInputChange}
        />
      ) : null}
      {depositMoneyModal ? (
        <OperateMoneyModal
          handleModal={() => setDepositMoneyModal(!depositMoneyModal)}
          handleMoney={handleDepositMoney}
          amount={amountToDeposit}
          handleInputChange={handleDepositInputChange}
          displayInfoModal={displayInfoModal}
          type='deposit'
        />
      ) : null}

      <InfoModal message={infoMessage} visible={infoVisble} position='right' />
    </section>
  );
};

export default WalletSettingsPage;
