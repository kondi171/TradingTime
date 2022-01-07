import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../AppContext';
import WithdrawMoneyModal from '../WithdrawMoneyModal';
// import modifyAccountNumber from '../../helpers/modifyAccountNumber';
import modifyAccountNumber from '../../helpers/ModifyAccountNumber';

const WalletSettingsPage = () => {
  // state = {
  //   walletPreferences: {
  //     accountNr: '23 1435 4452 1000 0000 6425 2357',
  //     accountBalance: 200,
  //   },

  //   amountToWithdraw: '',

  //   withdrawMoneyModalShow: false,
  // };

  const [accountNr, setAccountNr] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const [amountToWithdraw, setAmountToWithdraw] = useState('');
  const [withdrawMoneyModal, setWithdrawMoneyModal] = useState(0);

  const { userAccountBalance } = useContext(AppContext);
  const { userPersonalData } = useContext(AppContext);

  const handleWithdrawMoney = (e, amountToWithdraw) => {
    e.preventDefault();

    if (amountToWithdraw > accountBalance)
      alert('Nie posiadasz tyle pieniędzy na koncie.');
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

  const handleDepositMoney = () => {};

  const handleWithdrawInputChange = (e) => {
    const amountToWithdraw = e.target.value;
    setAmountToWithdraw(amountToWithdraw);
  };

  useEffect(() => {
    setAccountBalance(Number(userAccountBalance));
    setAccountNr(userPersonalData.bankAccount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* {console.log(modifyAccountNumber(23143544521000000064252357))} */}
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
            <span>{modifyAccountNumber(accountNr)}</span>
            <i className='fa fa-question-circle-o' aria-hidden='true'>
              <span></span>
            </i>
          </div>

          <div className='settings-page__preferences__list__account-buttons'>
            <button className='button button--large' onClick={handleModal}>
              Wypłać pieniądze na konto
            </button>
            <button
              className='button button--large'
              onClick={handleDepositMoney}
            >
              Wpłać pieniądze do aplikacji
            </button>
          </div>
        </div>

        {withdrawMoneyModal ? (
          <WithdrawMoneyModal
            handleModal={handleModal}
            handleWithdrawMoney={(e) =>
              handleWithdrawMoney(e, amountToWithdraw)
            }
            amountToWithdraw={amountToWithdraw}
            handleWithdrawInputChange={handleWithdrawInputChange}
            e={this.event}
          />
        ) : null}
      </section>
    </>
  );
};

export default WalletSettingsPage;
