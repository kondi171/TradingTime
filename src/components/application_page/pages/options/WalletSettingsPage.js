import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../../../AppContext';
import OperateMoneyModal from '../../../features/modals/OperateMoneyModal';
// import ModifyAccountNumber from '../../../helpers/ModifyAccountNumber';
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

  const handleWithdrawMoney = (e, amountToWithdraw) => {
    e.preventDefault();

    if (amountToWithdraw > accountBalance)
      displayInfoModal('Nie posiadasz tyle pieniędzy na koncie!');
    else {
      let tempAccountBalance = accountBalance;
      tempAccountBalance -= amountToWithdraw;
      setAccountBalance(tempAccountBalance);
      setAmountToWithdraw('');

      handleModal();
    }
  };

  const handleModal = () => {
    setWithdrawMoneyModal(!withdrawMoneyModal);
  };

  const handleDepositMoney = (e, amountToDeposit) => {};

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
            {accountNr !== '' && accountNr !== null
              ? ModifyAccountNumber(accountNr)
              : 'Numer konta nie został podany!'}
          </span>
          <i className='fa fa-question-circle-o' aria-hidden='true'>
            <span></span>
          </i>
        </div>

        <div className='settings-page__preferences__list__account-buttons'>
          <button
            className='button button--large'
            onClick={() => setWithdrawMoneyModal(!withdrawMoneyModal)}
          >
            Wypłać pieniądze na konto
          </button>
          <button
            className='button button--large'
            onClick={() => setDepositMoneyModal(!withdrawMoneyModal)}
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
          handleMoney={(e) => handleWithdrawMoney(e, amountToWithdraw)}
          amount={amountToDeposit}
          handleInputChange={handleDepositInputChange}
          type='deposit'
        />
      ) : null}

      <InfoModal message={infoMessage} visible={infoVisble} position='right' />
    </section>
  );
};

export default WalletSettingsPage;
